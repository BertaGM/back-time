import express from "express";
import morgan from "morgan";
import pingRouter from "../features/ping/router/pingRouter.js";
import app from "./app.js";
import { generalError, notFound } from "./middlewares/error/generalError.js";

app.use(morgan("dev"));
app.use(express.json());

app.use("/", pingRouter);

app.use(notFound);
app.use(generalError);
