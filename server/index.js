const chalk = require("chalk");
const log = console.log;

const express = require("express");
const { Nuxt, Builder } = require("nuxt");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const api = require("./models/");

const app = express();
const host = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 3000;

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

  mongoose.connect(
    config.server.mongooseUri,
    function(err, db) {
      if (!err) {
        log(logo);
        log(chalk.green("Connected to database: ") + db.name);
        app.listen(port, host);
        log(chalk.green.bold("Effect Index up on " + host + ":" + port)); // eslint-disable-line no-console
      } else {
        log(chalk.red.bold("Error connecting to database."));
        process.exit(1);
      }
    }
  );
}

start();

let logo = chalk.grey(`
                   ddddhyyyyyhdddd
              ddhs+:.\`         \`.:+shdd
            ddy/-\`    ${chalk.red(`.:+syyys+:\``)}     ./shd
          dy/.      ${chalk.keyword("orange")(`-ohhs+/:/ohddo.`)}      \`:sdd
        ds-\`       ${chalk.keyword("yellow")(`:hd+.    `) +
          chalk.white(`-yd`) +
          chalk.keyword("yellow")(` ddh:`)}        .+hd
      ds-         ${chalk.green(`.sd+\`     `) +
        chalk.white(`.+ys/`) +
        chalk.green(`+ds.`)}         .od
      y-          ${chalk.blue(`:yd:           /dy-`)}          -y
      h/.        ${chalk.keyword("indigo")(`.sdo.         .ods.`)}        \`:y
        dh+.       ${chalk.keyword("violet")(`-sdy:\`     .:yds-`)}       \`:yd
          hs:.     ${chalk.red(`\`/shhysosyhhs:\``)}     \`-ohd
            dhs+-\`    ${chalk.keyword("orange")(`.-/+++/-.`)}    \`-/shd
                dhyo+:-.......-:+oyhd
                      dddhhhddd
                      `);
