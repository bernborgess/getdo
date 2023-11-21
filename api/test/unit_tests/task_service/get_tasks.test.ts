import { Task } from "../../../src/models/task";
import TaskService from "../../../src/services/TaskService";
import { EmptyMockTaskRepository, SingleMockTaskRepository } from "./mock_repositories";

test("getTasks with no tasks in db returns empty list", async () => {
    const taskService = new TaskService(new EmptyMockTaskRepository());
    const tasks: Task[] = await taskService.getTasks();
    expect(tasks.length).toBe(0);
})

test("getTasks with one task in db returns list of one task", async () => {
    const taskService = new TaskService(new SingleMockTaskRepository());
    const tasks: Task[] = await taskService.getTasks();
    expect(tasks.length).toBe(1);
})

test("getTasks returns the same result", async () => {
    const taskService = new TaskService(new SingleMockTaskRepository());
    const tasks1: Task[] = await taskService.getTasks();
    const tasks2: Task[] = await taskService.getTasks();
    expect(tasks1).toEqual(tasks2);
})
