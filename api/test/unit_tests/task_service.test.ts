import { Task } from "../../src/models/task";
import TaskService from "../../src/services/TaskService";

test("getTasks with no tasks in db returns empty list", async () => {
    const taskService = new TaskService();
    const tasks: Task[] = await taskService.getTasks();
    expect(tasks.length).toBe(0);
})
