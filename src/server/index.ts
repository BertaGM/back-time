import express from "express";
import pingRouter from "../features/ping/router/pingRouter.js";
import app from "./app.js";

app.use(express.json());

app.use("/", pingRouter);
