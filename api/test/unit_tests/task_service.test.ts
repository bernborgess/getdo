import { TaskRepository } from "../../src/contracts/TaskRepository";
import { NewTask, Task } from "../../src/models/task";
import TaskService from "../../src/services/TaskService";

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

class EmptyMockRepository implements TaskRepository {
    getTask(id: string): Promise<Task> {
        throw new Error("Method not implemented.");
    }
    tasks = async (): Promise<Task[]> => {
        return [];
    }

    createTask = async (data: NewTask): Promise<Task> => {
        return new Task(data);
    }

    deleteTask = async (id: string): Promise<void> => {
        return;
    }
}

class SingleMockRepository implements TaskRepository {
    getTask(id: string): Promise<Task> {
        throw new Error("Method not implemented.");
    }
    tasks = async (): Promise<Task[]> => {
        const data: NewTask = {
            day: 3,
            deadline: new Date("2023-11-02T03:24:00"),
            description: "Mind the trash lid",
            level: 2,
            title: "Get the trash out",
        }
        return [new Task(data)];
    }
    createTask = async (data: NewTask): Promise<Task> => {
        return new Task(data);
    }
    deleteTask = async (id: string): Promise<void> => {
        return;
    }

}