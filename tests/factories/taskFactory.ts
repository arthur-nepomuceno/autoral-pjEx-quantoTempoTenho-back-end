import { faker } from "@faker-js/faker"

const task = {
    title: faker.datatype.string(),
    timeSpan: faker.datatype.number(),
    deadline: faker.datatype.number(),
}

export {
    task
}