import { Router } from "express";
import { taskRouter } from "./taskRouter";

export const router = Router();

router.use(taskRouter);