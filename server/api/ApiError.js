module.exports = function(name, message) {
    var error = new Error(message);
    error.name = name;
    return error;
}