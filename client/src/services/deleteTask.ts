import { api } from "./api";

export async function deleteTask(id: string) {
    return await api.delete(`tasks/${id}`);
}