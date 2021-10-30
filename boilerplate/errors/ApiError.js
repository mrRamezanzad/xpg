const BaseError = require("./BaseError")

const ApiError = class extends BaseError {
  constructor(name = "API Error", statusCode = 500, message) {
    super(name, statusCode, message)
    this.name = name 
    this.statusCode = statusCode
  }

  static badRequest(message = "check your data") {
    return new ApiError("BAD_REQUEST", 400, message)
  }

  static unAuthorized(message = "you should login first") {
    return new ApiError("UNAUTHORIZED", 401, message)
  }

  static forbidden(message = "you are not permitted") {
    return new ApiError("FORBIDDEN", 403, message)
  }

  static notFound(message = "couldn't find anything") {
    return new ApiError("NOT_FOUND", 404, message)
  }

  static internal(message = "our server is in problem") {
    return new ApiError("INTERNAL_SERVER_ERROR", 500, message)
  }

  /** NOT RECEIVING PROPER ANSWER FROM UPPER SERVER */
  static  badGateway(message = "upper server is not responding") {
    return new ApiError("BAD_GATEWAY", 502, message)
  }

  /** ORVERLOADED SERVICE OR UNDER MAINTENANCE */
  static  unAvailabe(message = "we are doing some maintenance") {
    return new ApiError("SERVICE_UNAVAILABLE", 503, message)
  }

  /** LIKE BAD_GATEWAY WICH IS NOT RECIEVING RESPONSE IN ALLOWED TIME */
  static  gatewayTimeout(message = "time to get response from another server has exceeded") {
    return new ApiError("SERVICE_UNAVAILABLE", 504, message)
  }
}

module.exports = ApiError