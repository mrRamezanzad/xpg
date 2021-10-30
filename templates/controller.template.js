const router = require('express').Router()

const $0Service = require('../services/$0.service')

router

  .post('/$0s', asyncHandler((req, res, next) => {
    $0Service.create()
  }))

  .get('/$0s', asyncHandler(async (req, res, next) => {
    $0Service.findAll()
  }))

  .get('/$0s/:id', asyncHandler(async (req, res, next) => {
    $0Service.findOne()
  }))

  .patch('/$0s/:id', asyncHandler(async (req, res, next) => {
    $0Service.update()
  }))

  .delete('/articles/:id', asyncHandler(async (req, res, next) => {
    $0Service.delete()
  }))

module.exports = router