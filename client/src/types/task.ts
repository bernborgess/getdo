
export interface NewTask {
    title: string;
    day: number;
}


export interface Task extends NewTask {
    id: string;
}