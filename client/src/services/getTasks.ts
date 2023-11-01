import { api } from "./api";

export async function getTasks(): Promise<Task[]> {
    const { data } = await api.get("tasks");
    return data;
}