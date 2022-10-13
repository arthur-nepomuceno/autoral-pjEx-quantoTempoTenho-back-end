import { Router } from "express";
import { createTask, findTasks, deleteTask } from "../controllers/taskController";
import { checkSchema } from "../middlewares/dataMiddleware";
import { taskSchema } from "../schemas/taskSchema";

export const taskRouter = Router();

taskRouter.post('/task', checkSchema(taskSchema), createTask);
taskRouter.get('/tasks', findTasks);
taskRouter.delete('/task/:id', deleteTask);