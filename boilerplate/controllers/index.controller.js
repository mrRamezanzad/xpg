const router = require('express').Router()

const { asyncHandler } = require('../tools/general.tool')

const indexService = require('../services/index.service')

router

  .post('/indexs', asyncHandler(async (req, res, next) => {
    await indexService.create()
  }))

  .get('/indexs', asyncHandler(async (req, res, next) => {
    await indexService.findAll()
  }))

  .get('/indexs/:id', asyncHandler(async (req, res, next) => {
    await indexService.findOne()
  }))

  .patch('/indexs/:id', asyncHandler(async (req, res, next) => {
    await indexService.update()
  }))

  .delete('/indexs/:id', asyncHandler(async (req, res, next) => {
    await indexService.delete()
  }))

module.exports = router