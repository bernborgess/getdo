import { Repository } from "../../src/contracts/Repository";
import { Task } from "../../src/models/task";
import TaskService from "../../src/services/TaskService";

test("getTasks with no tasks in db returns empty list", async () => {
    const taskService = new TaskService(new EmptyMockRepository());
    const tasks: Task[] = await taskService.getTasks();
    expect(tasks.length).toBe(0);
})

test("getTasks with one task in db returns list of one article", async () => {
    const taskService = new TaskService(new SingleMockRepository());
    const tasks: Task[] = await taskService.getTasks();
    expect(tasks.length).toBe(1);
})

test("createTask works with simple example", async () => {
    const taskService = new TaskService(new EmptyMockRepository());
    const data = { title: 'Task 1', day: 2 };
    const task: Task = await taskService.createTask(data);
    expect(task).toEqual(data);
})

class EmptyMockRepository implements Repository {
    tasks = async (): Promise<Task[]> => {
        return [];
    }
    createTask = async (data: { title: string; day: number; }): Promise<Task> => {
        return new Task(data.title, data.day);
    }
}

class SingleMockRepository implements Repository {
    tasks = async (): Promise<Task[]> => {
        return [new Task("Get the trash out", 3)];
    }
    createTask = async (data: { title: string; day: number; }): Promise<Task> => {
        return new Task(data.title, data.day);
    }

}