"use strict"

module.exports = () => {
  require('yargs').usage('Usage: $0 <command> [options]')
    .commandDir('cmds')
    .demandCommand()
    .option('tumblr-consumer-key', {
      alias: 'k',
      describe: 'Tumblr consumer key',
      type: 'string',
      demandOption: true
    })
    .help()
    .argv
};
