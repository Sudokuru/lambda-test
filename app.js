var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var serverless = require('serverless-http');
var express = require('express');
var app = express();
var cors = require("cors");
require("dotenv").config({ path: "./config.env" });
var port = process.env.PORT || 3000;
// Runs on local port if ran using node app.js local
var local = false;
process.argv.forEach(function (val, index, array) {
    if (index === 2 && val === 'local') {
        local = true;
    }
});
app.use(require("./routes/record"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/api/info', function (req, res) {
    res.send({ application: 'sample-app', version: '1' });
});
app.post('/api/v1/getback', function (req, res) {
    res.send(__assign({}, req.body));
});
if (local) {
    app.listen(port, function () { return console.log("Listening on: ".concat(port)); });
}
else {
    module.exports.handler = serverless(app);
}
