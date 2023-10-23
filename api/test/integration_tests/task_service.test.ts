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

test("getTasks with one task in db returns list of one task", async () => {
    await db.task.deleteMany();
    await db.task.create({ data: { title: "Get the trash out", day: 2 } });
    const taskService = new TaskService(new PrismaRepository());
    const tasks: Task[] = await taskService.getTasks();
    expect(tasks.length).toBe(1);
})

test("createTask with normal fields work with db", async () => {
    await db.task.deleteMany();
    const taskService = new TaskService(new PrismaRepository());
    const data = { title: "Title 1", day: 2 };
    const task: Task = await taskService.createTask(data);
    expect(task.title).toEqual(data.title);
    expect(task.day).toEqual(data.day);
})

