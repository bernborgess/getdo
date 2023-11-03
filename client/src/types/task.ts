
export interface NewTask {
    title: string;
    description: string;
    day: number;
    level: number;
}

export const emptyData = {
    title: "", 
    description: "",
    day: 0,
    level: 0,
}


export interface Task extends NewTask {
    id: string;
}