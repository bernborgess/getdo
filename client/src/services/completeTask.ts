import { api } from "./api";

export async function completeTask(id: string) {
    return await api.patch(`tasks/${id}`);
}