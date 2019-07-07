import {Command, flags} from '@oclif/command'
import fetch from 'node-fetch'

export default class Test extends Command {
  static description = 'Test connectivity with the specified Tumblr blog, without actually exporting anything.'

  static examples = [
    `$ ghostify test --tumblrConsumerKey AbCdE12345 my_awesome_blog
Connected to Tumblr and found the blog "My Awesome Blog" with 101 posts.
`
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    tumblrConsumerKey: flags.string({char: 'k', description: 'Tumblr API consumer key', required: true})
  }

  static args = [
    {name: 'blogIdentifier', required: true}
  ]

  // Execute this command
  async run() {
    const {args, flags} = this.parse(Test)

    const tumblrConsumerKey = flags.tumblrConsumerKey
    const blogIdentifier = args.blogIdentifier

    const blog = await this.getBlogInfo(tumblrConsumerKey, blogIdentifier)
    this.log(`Connected to Tumblr and found the blog "${blog.title}" with ${blog.posts} posts.`)
  }

  // Make a call to the Tumblr blog info API endpoint and return the "blog" object
  // https://www.tumblr.com/docs/en/api/v2#info---retrieve-blog-info
  async getBlogInfo(tumblrConsumerKey: string, blogIdentifier: string) {
    const url = `https://api.tumblr.com/v2/blog/${blogIdentifier}/info?api_key=${tumblrConsumerKey}`
    const response = await fetch(url)
    if (!response.ok) {
      this.error(response.statusText)
    }
    const json = await response.json()
    return json.response.blog
  }
}
