"use strict";
exports.command = 'preview <blog-name>'

exports.describe = 'Display what will be exported from the specified Tumblr blog'

exports.handler = function (argv) {
  console.log(`Previewing ghostification of ${argv.blogName}...`);
}
