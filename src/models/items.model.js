// import { sequelize, DateDataTypeOptions } from "sequelize";
/**
 * @function food - Module representing the food model.
 * create a new food model using define method of sequelize.
 * @param {sequelize} sequelize - An instance of Sequelize.
 * @param  {DateDataTypeOptions} DateDataTypeOptions instance of DateDataType
 */

const item = (sequelize, DataTypes) =>
  sequelize.define("item", {
    id: { type: DataTypes.STRING, allowNull: false },
    category: { type: DataTypes.STRING, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    inventoryCount: { type: DataTypes.FLOAT, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: false },
  });

module.exports = item;
