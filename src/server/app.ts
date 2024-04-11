import "dotenv/config";
import express from "express";
import chalk from "chalk";
import debugCreator from "debug";

const app = express();

const debug = debugCreator("src:server:app");

export const startServer = (port: number) => {
  app.listen(port, () => {
    debug(chalk.bgBlueBright(`Server listening on http://localhost:${port}`));
  });
};

export default app;
