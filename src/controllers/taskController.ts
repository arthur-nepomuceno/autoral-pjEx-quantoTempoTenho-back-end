import { Request, Response } from "express";
import { insertTask, searchTasks, removeTask } from "../services/taskServices"

async function createTask(req: Request, res: Response) {

    const task = req.body;

    await insertTask(task)

    return res.status(201).send('Created.');
}

async function findTasks(req: Request, res: Response) {

    const tasks = await searchTasks();

    return res.status(200).send(tasks)
}

async function deleteTask(req: Request, res: Response) {
    const id = Number(req.params.id);
    await removeTask(id);

    return res.status(200).send(`Task with id ${id} was deleted successfully.`);
}

export {
    createTask,
    findTasks,
    deleteTask
}