const indexModel = require('../models/index.model')

exports.create = await indexModel.create(...args)

exports.findAll = await indexModel.find(...args)

exports.findOne = await indexModel.findOne(...args)

exports.update = await indexModel.updateOne(...args)

exports.delete = await indexModel.deleteOne(...args)