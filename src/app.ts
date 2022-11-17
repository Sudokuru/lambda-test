import errorHandler from "./app/errorHandler/error.handler";

const serverless = require('serverless-http');
const expressApp = require('express');
const app = expressApp();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.APP_PORT || 3000;

// Runs on local port if ran using node app.js local
let local:boolean = false;
process.argv.forEach(function(val, index, array) {
    if (index === 2 && val === 'local') {
        local = true;
    }
});

//app.use(require("./app/routes/books"));
//require("./app/routes/record")(app);
app.use(cors());
app.use(expressApp.urlencoded({ extended: true }));
app.use(expressApp.json());

const booksRouter = require('./app/routes/books.route');
app.use('/books', booksRouter);

app.get('/api/info', (req, res) => {
  res.send({ application: 'sample-app', version: '1' });
});
app.post('/api/v1/getback', (req, res) => {
  res.send({ ...req.body });
});

app.use(errorHandler);

if (local) {
    app.listen(port, () => console.log(`Listening on: ${port}`));
}
else {
    module.exports.handler = serverless(app);
}