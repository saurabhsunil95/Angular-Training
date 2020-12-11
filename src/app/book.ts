// TS: interface is used for 2 things
// 1. creating a type to be assigned to a variable so that the variable follows the rule of type
// 2. it can provide functions to be implemented by class (like C++, C#, Java)
export interface Book {
    title: string; // mandatory
    price: number; // mandatory
    author: string; // mandatory
    publisher?: string; // optional
}