const yargs = require("yargs");

const environment = yargs.argv.environment;

module.exports = environment === "production"
    ? require("./environment.prod")
    : require("./environment.dev");
