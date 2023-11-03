
export interface NewTask {
    day: number;
    deadline: Date;
    description: string;
    level: number;
    title: string;
}


export class Task {
    day: number;
    deadline: Date;
    description: string;
    level: number;
    title: string;

    constructor(data: NewTask) {
        Object.assign(this, data);
    }
}