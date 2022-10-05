import { ITaskData } from "../types/taskType"
import { createTask, findTasks } from "../repositories/taskRepository";

async function insertTask(object: ITaskData) {
    return await createTask(object);
}

async function searchTasks() {
    return await findTasks();
}

export {
    insertTask,
    searchTasks
}