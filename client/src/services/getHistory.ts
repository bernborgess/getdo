import { Task } from "../types/task";
import { api } from "./api";

export async function getHistory(): Promise<Task[]> {
    const { data } = await api.get("history");
    return data;
}