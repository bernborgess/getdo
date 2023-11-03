import { HistoryTask } from "../types/history";
import { api } from "./api";

export async function getHistory(): Promise<HistoryTask[]> {
    const { data } = await api.get("history");
    return data;
}