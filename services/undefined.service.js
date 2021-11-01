const undefinedModel = require('../models/undefined.model')

exports.create = async (...args) => undefinedModel.create(...args)

exports.findAll = async (...args) => undefinedModel.find(...args)

exports.findOne = async (...args) => undefinedModel.findOne(...args)

exports.update = async (...args) => undefinedModel.updateOne(...args)

exports.delete = async (...args) => undefinedModel.deleteOne(...args)