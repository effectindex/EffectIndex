const path = require("path");
require('dotenv').config({ path: path.join(__dirname, '.env') });
const messages = require('./messages.js');

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
app.use(express.json({ limit: "1mb" }));
app.use(api);

// Import and Set Nuxt.js options
let config = require("../nuxt.config.js");
config.dev = !(process.env.NODE_ENV === "production");

async function start() {
  while(true) {
    messages.preconnect();
    try {
      const connection = await mongoose.connect(config.server.mongooseUri, { useNewUrlParser: true, useUnifiedTopology: true });
      if (config.dev) messages.logo();
      messages.connected(connection.connections[0].name);
      await firstRun();
      messages.up(host, port);
      break;
    } catch (error) {
      messages.error;
      if (!config.dev) process.exit(0);
    }
  }
}

start();

module.exports = app;
