import { NewHistory } from "../models/history";
import { Task } from "../models/task";

export function taskToHistory(task: Task): NewHistory {
    return {
        description: task.description,
        finishedAt: new Date(),
        level: task.level,
        title: task.title,
    };
}