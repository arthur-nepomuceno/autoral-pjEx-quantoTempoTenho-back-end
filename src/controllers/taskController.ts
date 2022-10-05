import { Request, Response } from "express";
import { insertTask, searchTasks } from "../services/taskService"

async function createTask(req: Request, res: Response) {

    const task = req.body;

    await insertTask(task)

    return res.status(201).send('Created.');
}

async function findTasks(req: Request, res: Response) {

    const tasks = await searchTasks();

    return res.status(200).send(tasks)
}

export {
    createTask,
    findTasks
}