const path = require("path");
require('dotenv').config({ path: path.join(__dirname, '.env') });
const chalk = require("chalk");
const logo = chalk.grey(require('./logo'));
const log = console.log;

const express = require("express");

const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

const api = require("./models/");

const app = express();
const host = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 3000;

const firstRun = require("./models/firstRun");

app.set("port", port);

// Import API Routes
app.use(express.json());
app.use(api);

// Import and Set Nuxt.js options
let config = require("../nuxt.config.js");
config.dev = !(process.env.NODE_ENV === "production");

async function start() {
  while(true) {
    log(chalk.yellow(`Attempting mongoose connection...`));
    try {
      const connection = await mongoose.connect(config.server.mongooseUri, { useNewUrlParser: true, useUnifiedTopology: true });
      if (config.dev) log(logo);
      log(chalk.green(`Connected to database: ${connection.connections[0].name}`));
      await firstRun();
      log(chalk.green.bold(`Effect Index up on ${host}:${port}`));
      break;
    } catch (error) {
      log(chalk.red.bold(`Error connecting to database.`));
      if (!config.dev) process.exit(0);
    }
  }
}

start();

module.exports = app;
