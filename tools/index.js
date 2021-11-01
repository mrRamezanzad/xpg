const { existsSync, writeFileSync, mkdirSync, readFileSync, lstatSync, readdirSync, copyFileSync } = require('fs')
const { join } = require('path')

const checkExistance = name => existsSync(name)

exports.generateController = (name) => {
  if (!checkExistance('controllers')) mkdirSync('controllers')
  if (checkExistance(`${name}.controller.js`)) return console.log(`file named ${name}.controller.js already exists!`);

  let controllerTemplate = readFileSync(join(__dirname, '../boilerplate/controllers/index.controller.js'), 'utf-8')
    .toString().replace(/index/g, name)

  writeFileSync(`./controllers/${name}.controller.js`, controllerTemplate)
}

exports.generateService = (name) => {
  if (!checkExistance('services')) mkdirSync('services')
  if (checkExistance(`${name}.service.js`)) return console.log(`file named ${name}.service.js already exists!`);

  let serviceTemplate = readFileSync(join(__dirname, '../boilerplate/services/index.service.js'), 'utf-8')
    .toString().replace(/index/g, name)

  writeFileSync(`./services/${name}.service.js`, serviceTemplate)
}

exports.generateRest = (name) => {
  this.generateController(name)
  this.generateService(name)
}