import { prisma } from "../database/postgres";
import { IUserData } from "../types/userTypes";

async function findUserByEmail(email: string) {
    /**
     * find email at the data base
     */
    return prisma.users.findFirst({where: {email}})
}

async function findUserById(id: number) {
    /**
     * find id at the data base
     */
    return prisma.users.findFirst({where: {id}})
}

async function createUser(user: IUserData) {
    /**
     * send user data to data base
     */
    return prisma.users.create({data: user})
}

export {
    findUserByEmail,
    findUserById,
    createUser
}