import { Task } from "../../src/models/task";
import { prismaClient as db } from "../../src/resources/PrismaClient";
import { PrismaRepository } from "../../src/resources/PrismaRepository";
import TaskService from "../../src/services/TaskService";


test("getTasks with no tasks in db returns empty list", async () => {
    await db.task.deleteMany();
    const taskService = new TaskService(new PrismaRepository());
    const tasks: Task[] = await taskService.getTasks();
    expect(tasks.length).toBe(0);
})

test("getTasks with one task in db returns list of one article", async () => {
    await db.task.deleteMany();
    const taskService = new TaskService(new PrismaRepository());
    const tasks: Task[] = await taskService.getTasks();
    expect(tasks.length).toBe(1);
})

