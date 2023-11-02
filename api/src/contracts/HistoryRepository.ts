import { History } from "../models/history";

export interface HistoryRepository {
    histories(): Promise<History[]>;
}