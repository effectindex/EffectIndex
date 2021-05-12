const User = require('./users/User');
const chalk = require("chalk");
const log = console.log;
const bcrypt = require('bcryptjs');

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin';

const firstRun = async function() {
  let users = await User.find().exec();
  
  if (users.length === 0) {
    log(`${chalk.red.bold('\n\nNo users found!')}
    ${chalk.white('Creating initial admin user.')}
    ${chalk.green('Username:')} ${chalk.keyword("yellow")(ADMIN_USERNAME)}  ${chalk.green('password:')} ${chalk.keyword("yellow")(ADMIN_PASSWORD)}
    ${chalk.white('Be sure to create real admin credentials if using this in production.')}`);

    const hash = await bcrypt.hash(ADMIN_PASSWORD, 10);
    let newUser = new User({ username: ADMIN_USERNAME, hash, roles: ['admin'] });
    let returnedUser = await newUser.save();

    returnedUser ? log(chalk.green(`User '${ADMIN_USERNAME}' successfully created.`)) : log(chalk.red('Error creating admin user.'));
  }
};

module.exports = firstRun;

