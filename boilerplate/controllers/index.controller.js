const router = require('express').Router()

const { asyncHandler } = require('../tools/general.tool')

const indexService = require('../services/index.service')

router

  .post('/indexs', asyncHandler((req, res, next) => {
    indexService.create()
  }))

  .get('/indexs', asyncHandler(async (req, res, next) => {
    indexService.findAll()
  }))

  .get('/indexs/:id', asyncHandler(async (req, res, next) => {
    indexService.findOne()
  }))

  .patch('/indexs/:id', asyncHandler(async (req, res, next) => {
    indexService.update()
  }))

  .delete('/indexs/:id', asyncHandler(async (req, res, next) => {
    indexService.delete()
  }))

module.exports = router