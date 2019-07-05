import Nock from '@fancy-test/nock'
import * as Test from '@oclif/test'

const test = Test.test
.register('nock', Nock)
const expect = Test.expect

describe('test', () => {
  const params = {
    blogIdentifier: 'my_awesome_blog',
    title: 'My Awesome Blog',
    posts: 123,
    apiKey: 'abc123'
  }
  // valid call
  test
    .stdout()
    .nock('https://api.tumblr.com', api => {
      api.get(`/v2/blog/${params.blogIdentifier}/info?api_key=${params.apiKey}`)
        .reply(200, {meta: {status: 200, mag: 'OK'}, response: {blog: {title: params.title, posts: params.posts}}})
    })
    .command(['test', '--tumblrConsumerKey', params.apiKey, params.blogIdentifier])
    .it('returns details about the specified blog', ctx => {
      expect(ctx.stdout).to.equal('Connected to Tumblr and found the blog "My Awesome Blog" with 123 posts.\n')
    })

  // help command
  test
    .stdout()
    .command(['test', '--help'])
    .exit(0)
    .it('returns instructions', ctx => {
      expect(ctx.stdout).to.contain('Test connectivity with the specified Tumblr blog, without actually exporting anything.')
    })

  test
    .command(['test'])
    .catch(e => {
      expect(e.message).to.contain('Missing 1 required arg:\nblogIdentifier\nSee more help with --help')
    })
    .it('errors when not specifying a blog identifier')

  test
    .command(['test', 'my_awesome_blog'])
    .catch(e => {
      expect(e.message).to.contain('Missing required flag:\n -k, --tumblrConsumerKey TUMBLRCONSUMERKEY')
    })
    .it('errors when not specifying an API key')
})
