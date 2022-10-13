import { faker } from "@faker-js/faker"

const task = {
    title: faker.datatype.string(),
    days: faker.datatype.number(),
    hours: faker.datatype.number(),
    limit: faker.datatype.string(),
}

export {
    task
}