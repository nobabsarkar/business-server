import { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./app/middleweres/globalErrorHandler";
import notFound from "./app/middleweres/notFound";

const express = require("express");
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// global error handle
app.use(globalErrorHandler);

// handle not found
app.use(notFound);

export default app;
