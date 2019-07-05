import {Command, flags} from '@oclif/command'
import * as tumblr from 'tumblr.js'

export default class Test extends Command {
  static description = 'Test connectivity with the specified Tumblr blog, without actually exporting anything.'

  static examples = [
    `$ ghostify test --tumblrConsumerKey AbCdE12345 my_awesome_blog
Connected to Tumblr and found the blog "My Awesome Blog" with 101 posts.
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    tumblrConsumerKey: flags.string({char: 'k', description: 'Tumblr API consumer key', required: true}),
  }

  static args = [
    {name: 'blogIdentifier', required: true}
  ]

  // Execute this command
  async run() {
    const {args, flags} = this.parse(Test)

    const tumblrConsumerKey = flags.tumblrConsumerKey
    const blogIdentifier = args.blogIdentifier

    const tumblrClient = this.creatTumblrClient(tumblrConsumerKey)

    tumblrClient.blogInfo(blogIdentifier, (err, data) => {
      if (!err) {
        this.log(`Connected to Tumblr and found the blog "${data.blog.title}" with ${data.blog.total_posts} posts.`)
      } else {
        this.log(err.message)
        process.exit(1)
      }
    })
  }

  // Connect to Tumbr and retrieve details about the specified blog
  creatTumblrClient(tumblrConsumerKey: string) {
    return tumblr.createClient({
      credentials: {
        consumer_key: tumblrConsumerKey,
      },
      returnPromises: true
    })
  }
}
