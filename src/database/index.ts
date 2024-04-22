import "dotenv/config";
import chalk from "chalk";
import debugCreator from "debug";
import { Sequelize } from "sequelize";

const postgresUrl = process.env.POSTGRES_URL;
const debug = debugCreator("time:database:index");

if (!postgresUrl) {
  debug(chalk.redBright("POSTGRES_URL no está definido en el archivo .env"));
  process.exit(1);
}

const sequelize = new Sequelize(postgresUrl);

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log(chalk.bgGreenBright("Connect to database"));
  } catch (error) {
    console.log(chalk.bgRedBright("Error connecting to database", error));
  }
};

export default connectToDatabase;
