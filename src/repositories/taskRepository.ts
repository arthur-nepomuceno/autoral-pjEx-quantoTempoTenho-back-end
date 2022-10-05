import { prisma } from "../database/postgres";
import { ITaskData } from "../types/taskType"

async function createTask(object: ITaskData | any){
    return await prisma.tasks.create({data: object})
}

async function findTasks() {
    return await prisma.tasks.findMany();
}

export {
    createTask,
    findTasks
}