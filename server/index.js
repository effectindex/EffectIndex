const path = require("path");
require('dotenv').config({ path: path.join(__dirname, '.env') });
const env = require("../nuxt.config.js").env;

const Messages = require('./messages.js');

const express = require("express");

const mongoose = require("mongoose");

const api = require("./models/");

const app = express();
const host = env.HOST;
const port = env.PORT;

const firstRun = require("./models/firstRun");

app.set("port", port);

// Import API Routes
app.use(express.json({ limit: "1mb" }));
app.use(api);

// Import and Set Nuxt.js options
let config = require("../nuxt.config.js");
config.dev = (env.NODE_ENV !== "production");

const message = new Messages();

async function start() {
  while(true) {
    message.preconnect;
    try {
      const connection = await mongoose.connect(config.server.mongooseUri, { useNewUrlParser: true, useUnifiedTopology: true });
      if (config.dev) message.logo;
      message.connected(connection.connections[0].name);
      await firstRun();
      message.up(host, port);
      break;
    } catch (error) {
      message.error;
      if (!config.dev) process.exit(0);
    }
  }
}

start();

module.exports = app;
