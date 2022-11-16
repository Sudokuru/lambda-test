var jsonstring = require('../../../Variables.json');

module.exports = {
    //url: `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`
    url: jsonstring.MONGO_URL
};