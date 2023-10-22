import { Task } from "../../src/models/task";
import { PrismaRepository } from "../../src/resources/PrismaRepository";
import TaskService from "../../src/services/TaskService";


test("getTasks with no tasks in db returns empty list", async () => {
    const taskService = new TaskService(new PrismaRepository());
    const tasks: Task[] = await taskService.getTasks();
    expect(tasks.length).toBe(0);
})

test("getTasks with one task in db returns list of one article", async () => {
    const taskService = new TaskService(new PrismaRepository());
    const tasks: Task[] = await taskService.getTasks();
    expect(tasks.length).toBe(1);
})

