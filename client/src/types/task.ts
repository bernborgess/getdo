
interface NewTask {
    title: string;
    day: number;
}


interface Task extends NewTask {
    id: string;
}