import { NewTask } from "../types/task";
import { api } from "./api";

export async function createTask(body: NewTask) {
    return await api.post("tasks", body);
}