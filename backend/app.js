let express = require("express");
let bodyParser = require("body-parser");
let Sequelize = require("sequelize");

let sequelize = new Sequelize("database", "root", {
  host: "localhost",
  dialect: "mysql",
  port: 3306
});


let app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

module.exports = app;