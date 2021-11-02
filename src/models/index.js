"use strict";
const { Sequelize, DataTypes } = require("sequelize");
const food = require("./food.model");
const clothes = require("./clothes.model");
const POSTGRES_URI =
  process.env.NODE_ENV === "production"
    ? process.env.DATABASE_URI
    : "sqlite:memory:";

// NOTE we will configure connection option for proud
let sequelizeOptions =
  process.env.NODE_ENV === "production"
    ? {
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      }
    : {};

const sequelize = new Sequelize(POSTGRES_URI, {
  sequelizeOptions,
});

module.exports = {
  db: sequelize,
  food: food(sequelize, DataTypes),
  clothes: clothes(sequelize, DataTypes),
};
