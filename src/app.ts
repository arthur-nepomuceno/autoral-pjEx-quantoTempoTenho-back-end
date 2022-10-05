import express from "express";
import "express-async-errors";
import { router } from "./routers/router";
import { errorHandler } from "./middlewares/errorMiddleware";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors(), express.json());
app.use(router);
app.use(errorHandler);

export default app;