const path = require("path");
require('dotenv').config({ path: path.join(__dirname, '.env') });
const chalk = require("chalk");
const log = console.log;

const express = require("express");
const { Nuxt, Builder } = require("nuxt");
const bodyParser = require("body-parser");

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
app.use(bodyParser.json());
app.use("/api", api);

// Import and Set Nuxt.js options
let config = require("../nuxt.config.js");
config.dev = !(process.env.NODE_ENV === "production");

// Init Nuxt.js
const nuxt = new Nuxt(config);

// Give nuxt middleware to express
app.use(nuxt.render);

async function start() {
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  // Listen the server
  log(chalk.yellow("Attempting mongoose connection..."));

  await mongoose.connect(
    config.server.mongooseUri,
    { 
      useNewUrlParser: true,
      useUnifiedTopology: true
     },
    function(err, db) {
      if (!err) {
        if (config.dev) log(logo);
        log(chalk.green("Connected to database: ") + db.connections[0].name);
        app.listen(port, host);
        firstRun();
        log(chalk.green.bold("Effect Index up on " + host + ":" + port)); // eslint-disable-line no-console
      } else {
        log(chalk.red.bold("Error connecting to database."));
        process.exit(1);
      }
    }
  );
}

start();

let logo = chalk.grey(require('./logo'));
