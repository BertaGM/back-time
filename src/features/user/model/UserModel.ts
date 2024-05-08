import { DataTypes, Sequelize } from "sequelize";

const sequelize = new Sequelize("chronos", "root", {
  dialect: "postgres",
});

const User = sequelize.define("user", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthday: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  phoneNumber: {
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
    type: DataTypes.TEXT,
    allowNull: true,
  },
  profileImage: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  hability: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  habilityTitle: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  habilityDescription: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  userPassword: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default User;
