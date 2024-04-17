import express from "express";
import morgan from "morgan";
import cors from "cors";
import pingRouter from "../features/ping/router/pingRouter.js";
import app from "./app.js";
import { generalError, notFound } from "./middlewares/error/generalError.js";

const corsConcentedPort = process.env.ALLOWED_ORIGIN;
const corsOption = { origin: corsConcentedPort };

app.use(cors(corsOption));
app.use(morgan("dev"));
app.use(express.json());

app.use("/", pingRouter);

app.use(notFound);
app.use(generalError);
