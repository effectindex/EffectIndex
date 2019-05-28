const User = require('./users/User');
const chalk = require("chalk");
const log = console.log;
const bcrypt = require('bcryptjs');

const firstRun = async function() {
  let users = await User.find().exec();
  
  if (users.length === 0) {
    log(`${chalk.red.bold('\n\nNo users found!')}
${chalk.white('Creating initial admin user.')}
${chalk.green('Username:')} ${chalk.keyword("yellow")('admin')}  ${chalk.green('password:')} ${chalk.keyword("yellow")('admin')}
${chalk.white('Be sure to create real admin credentials if using this in production.')}`);

    let hash = await bcrypt.hash('admin', 10);
    let newUser = new User({ username: 'admin', hash, scope: { admin: true } });
    let returnedUser = await newUser.save();

    returnedUser ? log(chalk.green('User successfully created.')) : log(chalk.red('Error creating admin user.'));
  }
};

module.exports = firstRun;

