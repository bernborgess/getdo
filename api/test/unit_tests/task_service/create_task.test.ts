import { NewTask, Task } from "../../../src/models/task";
import TaskService from "../../../src/services/TaskService";
import { EmptyMockRepository } from "./mock_respositories";


test("createTask works with simple example", async () => {
    const taskService = new TaskService(new EmptyMockRepository());
    const data: NewTask = {
        title: 'Task 1',
        description: "Got to do this!",
        day: 2,
        deadline: new Date("2023-11-02T03:24:00"),
        level: 3
    };
    const task: Task = await taskService.createTask(data);
    expect(task).toEqual(data);
})
