import { NewTask } from "../models/task";

function isValidTitle(title: string): boolean {
    return title.length > 0;
}

function isValidDescription(description: string): boolean {
    return description.length > 0;
}

function isValidDay(day: number): boolean {
    return day >= 0;
}

function isValidLevel(level: number): boolean {
    return 1 <= level && level <= 5;
}

function isValidDeadline(deadline: Date): boolean {
    return !isNaN(deadline.getTime());
}

export function checkValidTask(data: NewTask) {

    if (!isValidTitle(data.title))
        throw new Error("Task title must not be empty");

    if (!isValidDescription(data.description))
        throw new Error("Task description must not be empty");

    if (!isValidDay(data.day))
        throw new Error("Task day must be non-negative");

    if (!isValidLevel(data.level))
        throw new Error("Task level must be between 1 and 5");

    if (!isValidDeadline(data.deadline))
        throw new Error("Task deadline must be a valid Date");

}