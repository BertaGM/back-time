import "dotenv/config";
import chalk from "chalk";
import debugCreator from "debug";
import express from "express";

const debug = debugCreator("time:server:app");

const app = express();
app.disable("x-powered-by");

export const startServer = (port: number) => {
  app.listen(port, () => {
    debug(chalk.bgBlueBright(`Server listening on http://localhost:${port}`));
  });
};

export default app;
