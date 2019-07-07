import {Command, flags} from '@oclif/command'
import * as fs from 'fs'
import fetch from 'node-fetch'

export default class Export extends Command {
  static description = 'Exports the specified Tumblr blog in the Ghost JSON format.'

  static examples = [
    `$ ghostify export --tumblrConsumerKey AbCdE12345 --outputFile export.json my_awesome_blog
Connected to Tumblr and found the blog "My Awesome Blog" with 101 posts.
`
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    tumblrConsumerKey: flags.string({char: 'k', description: 'Tumblr API consumer key', required: true}),
    outputFile: flags.string({char: 'o', description: 'Output file name', default: 'ghost.json'})
  }

  static args = [
    {name: 'blogIdentifier', required: true}
  ]

  posts: IGhostPost[] = []

  // Execute this command
  async run() {
    const {args, flags} = this.parse(Export)

    const tumblrConsumerKey = flags.tumblrConsumerKey
    const blogIdentifier = args.blogIdentifier

    const result = await this.transformAllPosts(tumblrConsumerKey, blogIdentifier)

    const output = {
      meta: {
          exported_on: Date.now(),
          version: '2.14.0'
      },
      data: {
        posts: this.posts
      }
    }
    fs.writeFile(`./${flags.outputFile}`, JSON.stringify(output), (err) => {
      if (err) {
        this.error(err)
      }
      this.log(`Exported ${result.postsCount} posts from "${result.title}" to "${flags.outputFile}"`)
    })
  }

  // Iterate over all of the posts in the specified blog, transfrming them into Ghost format
  async transformAllPosts(tumblrConsumerKey: string, blogIdentifier: string) {
    const baseUrl = 'https://api.tumblr.com'
    let nextPage = `/v2/blog/${blogIdentifier}/posts?&npf=False`
    const apiKeyParam = `&api_key=${tumblrConsumerKey}`

    let title = null
    let postsCount = 0

    while (nextPage !== '') {
      this.log(`Transforming ${nextPage}…`)
      const response = await fetch(baseUrl + nextPage + apiKeyParam)
      if (!response.ok) {
        this.error(response.statusText)
      }
      const json = await response.json()
      for (let post of json.response.posts) {
        this.transformPost(post)
        postsCount++
      }

      title = title || json.response.blog.title // Store the blog's title if we haven't already

      // Set nextPage to the "next" link returned by Tumblr. If there isn't one, we're done.
      nextPage = json.response._links ? json.response._links.next.href : ''
    }

    return {postsCount, title}
  }

  transformPost(tumblrPost: ITumblrPost) {
    const mobiledoc = {
      version: '0.3.1',
      atoms: [],
      cards: [['html', {cardName: 'html', html: tumblrPost.body}]],
      markups: [],
      sections: [[10, 0]]
    }

    const post: IGhostPost = {
      title: tumblrPost.title || tumblrPost.summary || 'unknown',
      slug: tumblrPost.slug + tumblrPost.id.toString(),
      mobiledoc: JSON.stringify(mobiledoc),
      status: 'published',
      published_at: tumblrPost.timestamp
    }
    this.posts.push(post)
  }
}

interface ITumblrPost extends Object {
  title?: string // The optional title of the post
  body?: string // The full post body
  summary?: string // A short summary of the post
  slug: string
  blog_name: string	// The short name used to uniquely identify a blog
  id:	number // The post's unique ID
  post_url:	string // The location of the post
  type: string // The type of post
  timestamp:	number // The time of the post, in seconds since the epoch
  date:	string // The GMT date and time of the post, as a string
  format: string // The post format: html or markdown
  reblog_key: string // The key used to reblog this post	See the /post/reblog method
  tags: string[] // Tags applied to the post
  bookmarklet?: boolean // Indicates whether the post was created via the Tumblr bookmarklet.	Exists only if true
  mobile?: boolean // Indicates whether the post was created via mobile/email publishing	Exists only if true
  source_url?: string //	The URL for the source of the content (for quotes, reblogs, etc.)	Exists only if there's a content source
  source_title?: string // The title of the source site. Exists only if there's a content source.
  state: string // Indicates the current state of the post	States are published, queued, draft and private.
  total_posts: number // The total number of post available for this request, useful for paginating through results.
}

interface IGhostPost extends Object {
  title: string
  slug: string
  mobiledoc: string
  status: string
  published_at: number
}
