import { Repository } from "../contracts/Repository";
import { Task } from "../models/task";

export class PrismaRepository implements Repository {

    async tasks(): Promise<Task[]> {

    }
}