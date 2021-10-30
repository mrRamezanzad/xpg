const { existsSync, writeFileSync, mkdirSync, readFileSync, lstatSync, readdirSync, copyFileSync } = require('fs')
const { join } = require('path')



const checkExistance = name => existsSync(name)
exports.generateRest = (name,) => {
  if (!checkExistance('services')) mkdirSync('services')
  if (!checkExistance('controllers')) mkdirSync('controllers')

  if (checkExistance(`${name}.service.js`)) return console.log(`file named ${name}.service.js already exists!`);
  if (checkExistance(`${name}.controller.js`)) return console.log(`file named ${name}.controller.js already exists!`);

  let serviceTemplate = readFileSync(join(__dirname, '../boilerplate/services/index.service.js'), 'utf-8')
    .toString().replace(/index/g, name)

  let controllerTemplate = readFileSync(join(__dirname, '../boilerplate/controllers/index.controller.js'), 'utf-8')
    .toString().replace(/index/g, name)

  writeFileSync(`./services/${name}.service.js`, serviceTemplate)
  writeFileSync(`./controllers/${name}.controller.js`, controllerTemplate)

}