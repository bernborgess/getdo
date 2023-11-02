import { History } from "../models/history";

export interface HistoryRepository {
    histories(): Promise<History[]>;
    createHistory(data: { title: string, finishedAt: Date }): Promise<History>
}