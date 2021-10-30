const { join } = require('path')
const fs = require('fs-extra')

const yargs = require('yargs')

const { generateRest, copyFolderSync } = require('./tools/index')

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

// const generateService = (name) => {
//   console.log('i will create a service for you named: ', argv.s)
// }
// if (argv['s']) {
//   generateService()
//   // const servicesExists = existsSync(join(__dirname, 'services'))
//   // if (!servicesExists) mkdirSync(join(__dirname, 'services'))
// }

// const generateController = (name) => {
//   console.log('i will create a controller for you named: ', name)
// }
// if (argv['c']) {
//   generateController(argv.c)
//   //   const controllersExists = existsSync(join(__dirname, 'controllers'))
//   //   if (!controllersExists) mkdirSync(join(__dirname, 'controllers'))
// }

module.exports = {}
