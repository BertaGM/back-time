import { DataTypes, Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "postgres",
  "postgres.ombnqehwnuloqlxwfsvx",
  "&-9R9bqQc22Ch-",
);

const user = sequelize.define("user", {
  _id: {
    type: DataTypes.NUMBER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dob: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  aboutYou: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  picture: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  service: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  serviceDescription: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = user;
