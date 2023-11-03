
export interface NewHistory {
    description: string;
    finishedAt: Date
    level: number;
    title: string;
}

export class History {
    description: string;
    finishedAt: Date
    level: number;
    title: string;

    constructor(data: NewHistory) {
        Object.assign(this, data);
    }
}