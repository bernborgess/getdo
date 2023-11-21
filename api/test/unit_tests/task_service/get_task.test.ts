import { Task } from "../../../src/models/task";
import TaskService from "../../../src/services/TaskService";
import { SingleMockTaskRepository } from "./mock_repositories";

test("getTask with id returns Task", async () => {
    const taskService = new TaskService(new SingleMockTaskRepository());
    const task: Task = await taskService.getTask("1");
    expect(task).toBeDefined();
})

test("getTask with not found id throws error", async () => {
    const taskService = new TaskService(new SingleMockTaskRepository());

    await expect(async () => { await taskService.getTask("-1") })
        .rejects.toThrow(new Error("Task not found"));
})
