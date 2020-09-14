const { model, Datatypes, Model, STRING } = require('sequelize');
const sequelize = require('../config/connection');
const { all } = require('sequelize/types/lib/operators');

// create our User model
class User extends Model{}

// define the object's table columns and configuration

User.init(
    {
        //             ---TABLE COLUMN DEFINITIONS---

        // table column definitions go here
        id: {

            // use the special Sequelize Datatypes object prototype of data it is
            type: Datatypes.INTEGER,

            // this is the equivalent of SQL's `NOT NULL` option
            allowNull: false,

            // instruct that this is the Primary Key
            primaryKey: true,

            // turn on auto increment
            autoIncrement: true

        },

        // define a username column
        username: {

            type: Datatypes.STRING,

            allowNull: false,
        },

        // define an email column
        email: {

            type: Datatypes.STRING,

            allowNull: false,

            // there cannot be any duplicate email values in this table
            unique: true,
            
            // if allowNull is set to false, we can run our data through validators before creating the table data
            validate: {

                isEmail: true

            }

        },

        // define a password
        password: {
            type: Datatypes.STRING,
            
            allowNull: false,

            validate: {

                // this means the password must be at least four long
                len: [4]

            }

        }


    },
    {
        //              --- TABLE CONFIGURATION---

        // table configuration options go here

        // this will pass in our sequelize connection
        sequelize,

        // this will prevent the creation of the createdAt/updatedAt timestamp fields
        timestamps: false,

        // don't pluralize name of database table
        freezeTableName: true,

        // uses underscores _ _ _
        underscored: true,

        // makes it so our model name stays lowercase
        modelName: 'user'

    }

);