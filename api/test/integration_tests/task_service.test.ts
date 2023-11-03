import { NewTask, Task } from "../../src/models/task";
import { prismaClient as db } from "../../src/resources/PrismaClient";
import { PrismaTaskRepository } from "../../src/resources/PrismaTaskRepository";
import TaskService from "../../src/services/TaskService";


test("getTasks with no tasks in db returns empty list", async () => {
    await db.task.deleteMany();
    const taskService = new TaskService(new PrismaTaskRepository());
    const tasks: Task[] = await taskService.getTasks();
    expect(tasks.length).toBe(0);
})

test("getTasks with one task in db returns list of one task", async () => {
    await db.task.deleteMany();
    const data: NewTask = {
        day: 2,
        deadline: new Date("2023-11-02T03:24:00"),
        description: "Don't forget the lid",
        level: 3,
        title: "Get the trash out",
    };
    await db.task.create({ data });
    const taskService = new TaskService(new PrismaTaskRepository());
    const tasks: Task[] = await taskService.getTasks();
    expect(tasks.length).toBe(1);
})

test("createTask with normal fields work with db", async () => {
    await db.task.deleteMany();
    const taskService = new TaskService(new PrismaTaskRepository());
    const data: NewTask = {
        day: 2,
        deadline: new Date("2023-11-02T03:24:00"),
        description: "Don't forget the lid",
        level: 3,
        title: "Get the trash out",
    };
    const task: Task = await taskService.createTask(data);
    expect(task.title).toEqual(data.title);
    expect(task.day).toEqual(data.day);
})

