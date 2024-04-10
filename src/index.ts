import "dotenv/config";
import { startServer } from "./server/app.js";
import "./server/index.js";

const port = process.env.PORT ?? 3000;

startServer(+port);
