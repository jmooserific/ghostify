"use strict";

module.exports = () => {
  require('yargs').usage('Usage: $0 <command> [options]')
    .commandDir('cmds')
    .demandCommand()
    .help()
    .argv;
};
