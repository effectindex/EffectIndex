const chalk = require('chalk');

module.exports = {
  logo: function() { console.log(chalk.grey(`
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
`)); },
preconnect: function() { console.log(chalk.yellow(`Attempting mongoose connection...`)); },
connected: function(name) {
  console.log(chalk.green(`Connected to database: ${name}`));
},
up: function(host, port) {
  console.log(chalk.green.bold(`Effect Index up on ${host}:${port}`));
},
error: function() { console.log(chalk.red.bold(`Error connecting to database.`)); }



};