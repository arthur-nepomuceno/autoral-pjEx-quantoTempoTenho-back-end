import { prisma } from "../database/postgres";
import { ITaskData } from "../types/taskTypes"

async function createTask(object: ITaskData | any){
    return await prisma.tasks.create({data: object})
}

async function findTasks() {
    return await prisma.tasks.findMany();
}

async function findTaskById(id: number) {
    return await prisma.tasks.findFirst({where: {id}})
}

async function deleteTask(id: number) {
    return await prisma.tasks.delete({where: {id}})
}

export {
    createTask,
    findTasks,
    findTaskById,
    deleteTask
}