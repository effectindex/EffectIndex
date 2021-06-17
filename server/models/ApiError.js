module.exports = function(name, message, code) {
  var error = new Error(message);
  error.name = name;
  error.type = "API";
  error.code = code || 400;
  return error;
};
