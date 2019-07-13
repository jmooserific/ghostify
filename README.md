ghostify
========

Export your [Tumblr](https://tumblr.com) blog to [Ghost](https://ghost.org).

_Very much a work in progress._

[![CircleCI](https://circleci.com/gh/jmooserific/ghostify.svg?style=svg)](https://circleci.com/gh/jmooserific/ghostify)
[![Maintainability](https://api.codeclimate.com/v1/badges/ce3bd74775ca451ac327/maintainability)](https://codeclimate.com/github/jmooserific/ghostify/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/ce3bd74775ca451ac327/test_coverage)](https://codeclimate.com/github/jmooserific/ghostify/test_coverage)

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
ghostify/0.0.2 darwin-x64 node-v12.6.0
$ ghostify --help [COMMAND]
USAGE
  $ ghostify COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ghostify export BLOGIDENTIFIER`](#ghostify-export-blogidentifier)
* [`ghostify help [COMMAND]`](#ghostify-help-command)
* [`ghostify test BLOGIDENTIFIER`](#ghostify-test-blogidentifier)

## `ghostify export BLOGIDENTIFIER`

Exports the specified Tumblr blog in the Ghost JSON format.

```
USAGE
  $ ghostify export BLOGIDENTIFIER

OPTIONS
  -h, --help                                 show CLI help
  -k, --tumblrConsumerKey=tumblrConsumerKey  (required) Tumblr API consumer key
  -o, --outputFile=outputFile                [default: ghost_import.json] Output file name

EXAMPLE
  $ ghostify export --tumblrConsumerKey AbCdE12345 --outputFile ghost_import.json my_awesome_blog
  Connected to Tumblr and found the blog "My Awesome Blog" with 101 posts.
```

_See code: [src/commands/export.ts](https://github.com/jmooserific/ghostify/blob/v0.0.2/src/commands/export.ts)_

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

## `ghostify test BLOGIDENTIFIER`

Test connectivity with the specified Tumblr blog, without actually exporting anything.

```
USAGE
  $ ghostify test BLOGIDENTIFIER

OPTIONS
  -h, --help                                 show CLI help
  -k, --tumblrConsumerKey=tumblrConsumerKey  (required) Tumblr API consumer key

EXAMPLE
  $ ghostify test --tumblrConsumerKey AbCdE12345 my_awesome_blog
  Connected to Tumblr and found the blog "My Awesome Blog" with 101 posts.
```

_See code: [src/commands/test.ts](https://github.com/jmooserific/ghostify/blob/v0.0.2/src/commands/test.ts)_
<!-- commandsstop -->
