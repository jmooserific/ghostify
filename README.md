ghostify
========

Export your [Tumblr](https://tumblr.com) blog to [Ghost](https://ghost.org).

_Very much a work in progress._

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/ghostify.svg)](https://npmjs.org/package/ghostify)
[![CircleCI](https://circleci.com/gh/jmooserific/ghostify/tree/master.svg?style=shield)](https://circleci.com/gh/jmooserific/ghostify/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/ghostify.svg)](https://npmjs.org/package/ghostify)
[![License](https://img.shields.io/npm/l/ghostify.svg)](https://github.com/jmooserific/ghostify/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g ghostify
$ ghostify COMMAND
running command...
$ ghostify (-v|--version|version)
ghostify/0.0.1 darwin-x64 node-v12.5.0
$ ghostify --help [COMMAND]
USAGE
  $ ghostify COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ghostify help [COMMAND]`](#ghostify-help-command)
* [`ghostify test BLOGNAME`](#ghostify-test-blogname)

## `ghostify help [COMMAND]`

display help for ghostify

```
USAGE
  $ ghostify help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.0/src/commands/help.ts)_

## `ghostify test BLOGNAME`

Test connectivity with the specified Tumblr blog, without actually exporting anything.

```
USAGE
  $ ghostify test BLOGNAME

OPTIONS
  -h, --help                                 show CLI help
  -k, --tumblrConsumerKey=tumblrConsumerKey  (required) Tumblr API consumer key

EXAMPLE
  $ ghostify test --tumblrConsumerKey AbCdE12345 my_awesome_blog
  Connected to Tumblr and found the blog "My Awesome Blog" with 101 posts.
```

_See code: [src/commands/test.ts](https://github.com/jmooserific/ghostify/blob/v0.0.1/src/commands/test.ts)_
<!-- commandsstop -->
