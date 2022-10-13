import * as taskServices from "../../src/services/taskServices"
import * as taskRepository from "../../src/repositories/taskRepository"
import * as taskFactory from "../factories/taskFactory"

describe('[TEST] taskServices.ts', () => {

    it('Function: insertTask(). Description: tests if a new task is registered successfully.', async () => {
        
        const task = taskFactory.task

        jest.spyOn(taskRepository, 'createTask').mockImplementationOnce(async () => {
            return {id: 1, ...task}
        })

        const result = await taskServices.insertTask(task)

        expect(result).not.toBeNull();

    })

})