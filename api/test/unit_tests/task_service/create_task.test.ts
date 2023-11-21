import { NewTask, Task } from "../../../src/models/task";
import TaskService from "../../../src/services/TaskService";
import { EmptyMockTaskRepository } from "./mock_repositories";


test("createTask works with simple example", async () => {
    const taskService = new TaskService(new EmptyMockTaskRepository());
    const data: NewTask = {
        title: "Task 1",
        description: "Got to do this!",
        day: 2,
        deadline: new Date("2023-11-02T03:24:00"),
        level: 3
    };
    const task: Task = await taskService.createTask(data);
    expect(task).toEqual(data);
})

test("Can't create a task with negative days", async () => {
    const taskService = new TaskService(new EmptyMockTaskRepository());
    const data: NewTask = {
        title: "Task 1",
        description: "Got to do this!",
        day: -2,
        deadline: new Date("2023-11-02T03:24:00"),
        level: 3
    };

    await expect(async () => { await taskService.createTask(data) })
        .rejects.toThrow(new Error("Task day must be non-negative"));
})

test("Can't create a task with empty title", async () => {
    const taskService = new TaskService(new EmptyMockTaskRepository());
    const data: NewTask = {
        title: "",
        description: "Got to do this!",
        day: 2,
        deadline: new Date("2023-11-02T03:24:00"),
        level: 3
    };

    await expect(async () => { await taskService.createTask(data) })
        .rejects.toThrow(new Error("Task title must not be empty"));
})


test("Can't create a task with empty description", async () => {
    const taskService = new TaskService(new EmptyMockTaskRepository());
    const data: NewTask = {
        title: "Some Title",
        description: "",
        day: 2,
        deadline: new Date("2023-11-02T03:24:00"),
        level: 3
    };

    await expect(async () => { await taskService.createTask(data) })
        .rejects.toThrow(new Error("Task description must not be empty"));
})

test("Can't create a task with level below 1", async () => {
    const taskService = new TaskService(new EmptyMockTaskRepository());
    const data: NewTask = {
        title: "Some Title",
        description: "Some Description",
        day: 2,
        deadline: new Date("2023-11-02T03:24:00"),
        level: 0
    };

    await expect(async () => { await taskService.createTask(data) })
        .rejects.toThrow(new Error("Task level must be between 1 and 5"));
})


test("Can't create a task with level above 5", async () => {
    const taskService = new TaskService(new EmptyMockTaskRepository());
    const data: NewTask = {
        title: "Some Title",
        description: "Some Description",
        day: 2,
        deadline: new Date("2023-11-02T03:24:00"),
        level: 6
    };

    await expect(async () => { await taskService.createTask(data) })
        .rejects.toThrow(new Error("Task level must be between 1 and 5"));
})

test("Can't create a task with invalid date", async () => {
    const taskService = new TaskService(new EmptyMockTaskRepository());
    const data: NewTask = {
        title: "Some Title",
        description: "Some Description",
        day: 2,
        deadline: new Date("trash"),
        level: 3
    };

    await expect(async () => { await taskService.createTask(data) })
        .rejects.toThrow(new Error("Task deadline must be a valid Date"));
})