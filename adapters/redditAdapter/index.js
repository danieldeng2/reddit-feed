const Production = require("./production");
const Fake = require("./fake");

module.exports = process.env.NODE_ENV == "test" ? new Fake() : new Production();
