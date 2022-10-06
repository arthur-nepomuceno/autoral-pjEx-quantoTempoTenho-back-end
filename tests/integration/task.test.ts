import supertest from "supertest";
import app from "../../src/app";
import * as taskFactory from "../factories/taskFactory";
import { prisma } from "../../src/database/postgres";

const agent = supertest(app);


beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE tasks`;
})

afterAll(async () => {
    await prisma.$disconnect();
})

describe('[TEST] Feature: tasks.', () => {

    it('End-point: post/exam. Rule: must return status 201 for a task successfully created.', async () => {

        const task = taskFactory.task;

        const response = await agent.post('/task').send(task);

        expect(response.status).toEqual(201);

        
    })

    it('End-point: get/exams. Rule: must return tasks from the database.', async () => {

        const task = taskFactory.task;

        await agent.post('/task').send(task)
        const response = await agent.get('/tasks');

        expect(response.body.length).toEqual(1);

    })
})