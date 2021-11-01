const { Schema, model } = require('mongoose')

const indexSchema = new Schema({
  name: String
})

module.exports = model('index', indexSchema)