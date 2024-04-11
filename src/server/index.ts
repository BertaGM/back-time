import express from "express";
import pingRouter from "../features/ping/router/pingRouter.js";
import app from "./app.js";
import { generalError, notFound } from "./middlewares/error/generalError.js";

app.use(express.json());

app.use("/", pingRouter);

app.use(notFound);
app.use(generalError);
