const router = require('express').Router()

const { asyncHandler } = require('../tools/general.tool')
const { badRequest } = require('../errors/ApiError')

const undefinedService = require('../services/undefined.service')

router

  .post('/undefineds', asyncHandler(async (req, res, next) => {
    await undefinedService.create()
  }))

  .get('/undefineds', asyncHandler(async (req, res, next) => {
    return badRequest('i just like to make an error')
    // undefinedService.findAll()
  }))

  .get('/undefineds/:id', asyncHandler(async (req, res, next) => {
    undefinedService.findOne()
  }))

  .patch('/undefineds/:id', asyncHandler(async (req, res, next) => {
    undefinedService.update()
  }))

  .delete('/undefineds/:id', asyncHandler(async (req, res, next) => {
    undefinedService.delete()
  }))

module.exports = router