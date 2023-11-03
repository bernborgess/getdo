
export interface NewTask {
    day: number;
    deadline: Date;
    description: string;
    level: number;
    title: string;
}

export const emptyData = {
    day: 0,
    deadline: new Date("00/00/0000"), 
    description: "",
    level: 0,
    title: "", 
}


export interface Task extends NewTask {
    id: string;
}