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

class EmptyMockRepository implements Repository {
    async tasks(): Promise<Task[]> {
        return [];
    }
}

class SingleMockRepository implements Repository {
    async tasks(): Promise<Task[]> {
        return [
            new Task("Get the trash out", 3)
        ];
    }
}