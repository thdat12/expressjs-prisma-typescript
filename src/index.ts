import "./aliases";

import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import api from "./routers";
import cors from "cors";
import dotenv from "dotenv";
import { config } from "@/config";

dotenv.config();

const app = express();

app.use(logger("common"));

app.use(
  bodyParser.json({
    limit: "50mb",
  })
);
app.use(
  bodyParser.urlencoded({
    extended: false,
    limit: "50mb",
  })
);

app.use(cors());

app.use("/api", api);

app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ message: "healthy" });
});

app.listen(config.server.port, () => {
  console.log(`server is running at port ${config.server.port}`);
});
