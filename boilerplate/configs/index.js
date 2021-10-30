const dotenv = require('dotenv')

dotenv.config()

module.exports = process.env.NODE_ENV === 'production' ? require('./prod.config') : require('./dev.config')