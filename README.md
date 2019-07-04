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
* [`ghostify hello [FILE]`](#ghostify-hello-file)
* [`ghostify help [COMMAND]`](#ghostify-help-command)

## `ghostify hello [FILE]`

describe the command here

```
USAGE
  $ ghostify hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ ghostify hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/jmooserific/ghostify/blob/v0.0.1/src/commands/hello.ts)_

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
<!-- commandsstop -->
