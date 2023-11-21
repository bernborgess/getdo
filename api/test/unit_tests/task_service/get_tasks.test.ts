import { Task } from "../../../src/models/task";
import TaskService from "../../../src/services/TaskService";
import { EmptyMockRepository, SingleMockRepository } from "./mock_respositories";

test("getTasks with no tasks in db returns empty list", async () => {
    const taskService = new TaskService(new EmptyMockRepository());
    const tasks: Task[] = await taskService.getTasks();
    expect(tasks.length).toBe(0);
})

test("getTasks with one task in db returns list of one task", async () => {
    const taskService = new TaskService(new SingleMockRepository());
    const tasks: Task[] = await taskService.getTasks();
    expect(tasks.length).toBe(1);
})
