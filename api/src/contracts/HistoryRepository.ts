import { History, NewHistory } from "../models/history";

export interface HistoryRepository {
    histories(): Promise<History[]>;
    createHistory(data: NewHistory): Promise<History>
}