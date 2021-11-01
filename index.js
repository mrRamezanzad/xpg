const { join } = require('path')
const fs = require('fs-extra')

const yargs = require('yargs')

const { generateRest, generateService, generateController } = require('./tools/index')

const argv = yargs
  .command(
    'new',
    'create a new project from boilerplate',
    {
      name: {
        description: 'create a new project from boilerplate',
        alias: 'n',
        type: 'string'
      }
    })
  .command(
    'controller',
    'create a new controller',
    {
      name: {
        description: 'create a new controller',
        alias: 'c',
        type: 'string'
      }
    })
  .command(
    'service',
    'create a new service',
    {
      name: {
        description: 'create a new service',
        alias: 's',
        type: 'string'
      }
    })
  .help()
  .alias('help', 'h')
  .argv

// console.log(argv)

if (argv['n']) return fs.copySync(join(__dirname, 'boilerplate'), `./${argv['n']}`)

if (!argv['c'] && !argv['s']) return generateRest(argv._[0])

if (argv['s']) return generateService(argv.s)

if (argv['c']) generateController(argv.c)

module.exports = {}
