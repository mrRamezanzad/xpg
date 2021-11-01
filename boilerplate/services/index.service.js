const indexModel = require('../models/index.model')

exports.create = async (...args) => indexModel.create(...args)

exports.findAll = async (...args) => indexModel.find(...args)

exports.findOne = async (...args) => indexModel.findOne(...args)

exports.update = async (...args) => indexModel.updateOne(...args)

exports.delete = async (...args) => indexModel.deleteOne(...args)