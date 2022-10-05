import supertest from "supertest";
import { faker } from "@faker-js/faker"
import app from "../../src/app"

const agent = supertest(app);

describe("TEST post/task", () => {

    it("Expect status 201 if task is registered successfully.", async () => {

        const task = {
            title: faker.datatype.string(),
            timeSpan: faker.datatype.number(),
            deadline: faker.datatype.number(),
        }

        const response = await agent.post('/task').send(task);

        expect(response.status).toEqual(201);

    })
})