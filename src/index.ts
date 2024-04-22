import "dotenv/config";
import { startServer } from "./server/app.js";
import "./server/index.js";
import connectToDatabase from "./database/index.js";

const port = process.env.PORT ?? 3000;

await connectToDatabase();

startServer(+port);
