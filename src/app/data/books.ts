import generateBooks from "../lib/generateBooks";

export const topBooks = generateBooks(10, "top");
export const newBooks = generateBooks(4, "new");
export const foreignBooks = generateBooks(4, "foreign");