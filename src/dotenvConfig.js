const path = require("path")
const isProd = process.env.NODE_ENV === "production"
const ENV = isProd ? "production" : "development"

module.exports = {
  path: path.resolve("./.env", ENV),
}
