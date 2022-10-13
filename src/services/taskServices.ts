import { ITaskData } from "../types/taskTypes"
import { createTask, findTasks, findTaskById, deleteTask } from "../repositories/taskRepository";

async function insertTask(object: ITaskData) {
    return await createTask(object);
}

async function searchTasks() {
    return await findTasks();
}

async function removeTask(id: number) {
    const response = await findTaskById(id);
    if(!response) throw {
        type: 'invalid_task_id',
        message: 'The task you are trying to delete does not exists or does not belong to you.'
    }

    return await deleteTask(id);
}

export {
    insertTask,
    searchTasks,
    removeTask
}