"use strict";
// Problem 1
function formatString(input, toUpper) {
    if (toUpper === true) {
        console.log(input.toUpperCase());
        return input.toUpperCase();
    }
    else if (toUpper === false) {
        console.log(input.toLowerCase());
        return input.toLowerCase();
    }
    console.log(input.toUpperCase());
    return input.toUpperCase();
}
// Example as given
formatString("Hello"); // Output: "HELLO"
formatString("Hello", true); // Output: "HELLO"
formatString("Hello", false); // Output: "hello"
// Problem 2
function filterByRating(items) {
    const heigherThan4 = items.filter((item) => item.rating >= 4);
    console.log(heigherThan4);
    return heigherThan4;
}
// Example as given
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
];
filterByRating(books);
// Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]
// Problem 3
function concatenateArrays(...arrays) {
    const newArr = [];
    arrays.forEach((arr) => newArr.push(...arr));
    console.log(newArr);
    return newArr;
}
// Example as given
concatenateArrays(["a", "b"], ["c"]); // Output: ["a", "b", "c"]
concatenateArrays([1, 2], [3, 4], [5]); // Output: [1, 2, 3, 4, 5]
// Problem 4
class Vehicle {
    _make;
    year;
    constructor(_make, year) {
        this._make = _make;
        this.year = year;
    }
    getInfo() {
        console.log(`Make: ${this._make}, Year: ${this.year}`);
        return `Make: ${this._make}, Year: ${this.year}`;
    }
}
class Car extends Vehicle {
    name;
    createdAt;
    model;
    constructor(name, createdAt, model) {
        super(name, createdAt);
        this.name = name;
        this.createdAt = createdAt;
        this.model = model;
    }
    getModel() {
        console.log(`Model: ${this.model}`);
        return `Model: ${this.model}`;
    }
}
// Example as given
const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo(); // Output: "Make: Toyota, Year: 2020"
myCar.getModel(); // Output: "Model: Corolla"
