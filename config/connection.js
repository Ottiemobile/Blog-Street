// this will import the Sequelize constructor from the library
const Sequelize = require('sequelize');

// this will grab the requirements for the dotenv configuration
require('dotenv').config();

// this will create the connection to the database, pass in your MySQL info for username and password
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'msql', 
    port: 3306
});


module.exports = sequelize;