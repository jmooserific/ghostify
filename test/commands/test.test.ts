import {expect, test} from '@oclif/test'

describe('test', () => {
  // valid call
  // test
  //   .nock('https://api.tumblr.com', api => api
  //     .get(/\/info$/)
  //     .reply(200, {meta: {status: 200, mag: 'OK'}, response: {blog: {title: 'My Awesome Blog', posts: 123}}})
  //   )
  //   .stdout()
  //   .command(['test', '--tumblrConsumerKey', 'abc123', 'my_awesome_blog'])
  //   .it('returns details about the specified blog', ctx => {
  //     expect(ctx.stdout).to.equal('Connected to Tumblr and found the blog "My Awesome Blog" with 123 posts.\n')
  //   })

  // help command
  test
    .stdout()
    .command(['test', '--help'])
    .exit(0)
    .it('returns instructions', ctx => {
      expect(ctx.stdout).to.contain('Test connectivity with the specified Tumblr blog, without actually exporting anything.')
    })
})
