import { NewHistory } from "../models/history";

function isValidTitle(title: string): boolean {
    return title.length > 0;
}

function isValidLevel(level: number): boolean {
    return 1 <= level && level <= 5;
}

export function checkValidHistory(data: NewHistory) {

    if (!isValidTitle(data.title))
        throw new Error("History title must not be empty");

    if (!isValidLevel(data.level))
        throw new Error("History level must be between 1 and 5");

}