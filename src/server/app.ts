import "dotenv/config";
import debug from "debug";
import express from "express";

const app = express();

export const startServer = (port: number) => {
  app.listen(port, () => {
    debug(`Server listening on http://localhost:${port}`);
  });
};

export default app;
