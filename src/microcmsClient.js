const { createClient } = require("microcms-js-sdk")
const dotenvConfig = require("./dotenvConfig")

require('dotenv').config(dotenvConfig)

const { CMS_SERVICE, CMS_API_KEY } = process.env

module.exports = createClient({
  serviceDomain: CMS_SERVICE,
  apiKey: CMS_API_KEY,
})
