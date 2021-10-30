const $0Model = require('../models/$0.model')

exports.create = await $0Model.create(...args)

exports.findAll = await $0Model.find(...args)

exports.findOne = await $0Model.findOne(...args)

exports.update = await $0Model.updateOne(...args)

exports.delete = await $0Model.deleteOne(...args)