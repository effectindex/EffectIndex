module.exports = function(name, message) {
    var error = new Error(message);
    error.name = name;
    error.type = 'API';
    console.log(error);
    return error;
}