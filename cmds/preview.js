"use strict"

const error = require('../utils/error')
const tumblr = require('tumblr.js')
const ora = require('ora')

exports.command = 'preview <blog-name>'
exports.describe = 'Display what will be exported from the specified Tumblr blog'

exports.handler = function (argv) {
  const spinner = ora().start()

  const client = new tumblr.Client({
    credentials: {
      consumer_key: argv.tumblrConsumerKey,
    }
  })

  client.blogInfo(argv.blogName, function(err, resp) {
    spinner.stop()
    if (!err) {
      console.log(`Found the blog "${resp.blog.title}" with ${resp.blog.total_posts} posts.`)
    } else {
      error(`An error occured when retrieving blog details. ${err}`, true)
    }
  })
}
