import { Router } from "express";
import { createTask, findTasks } from "../controllers/taskController";

export const taskRouter = Router();

taskRouter.post('/task', createTask);
taskRouter.get('/tasks', findTasks);