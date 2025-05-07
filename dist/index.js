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
// Problem 5
function processValue(value) {
    let outVal = 0;
    if (typeof value === "string") {
        console.log(value.length);
        outVal = value.length;
    }
    else if (typeof value === "number") {
        console.log(value * 2);
        outVal = value * 2;
    }
    return outVal;
}
// Example as given
processValue("hello"); // Output: 5
processValue(10); // Output: 20
function getMostExpensiveProduct(products) {
    if (products.length === 0)
        return null;
    let heighestPrice = products[0];
    products.forEach((product) => {
        if (product.price > heighestPrice.price)
            heighestPrice = product;
    });
    console.log(heighestPrice);
    return heighestPrice;
}
// Example as given
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
];
getMostExpensiveProduct(products);
// Output: { name: "Bag", price: 50 }
// Problem 7
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    if (day === Day.Saturday) {
        console.log("Weekend");
        return "Weekend";
    }
    if (day === Day.Sunday) {
        console.log("Weekend");
        return "Weekend";
    }
    console.log("Weekday");
    return "Weekday";
}
// Example as given
getDayType(Day.Monday); // Output: "Weekday"
getDayType(Day.Sunday); // Output: "Weekend"
// Problem 8
async function squareAsync(n) {
    const res = await new Promise((resolve, reject) => {
        if (n < 0)
            reject(new Error("Negative number not allowed"));
        setTimeout(() => resolve(Math.pow(n, 2)), 1000);
    });
    return res;
}
// Example as given
squareAsync(4).then(console.log); // Output after 1s: 16
squareAsync(-3).catch(console.error); // Output: Error: Negative number not allowed
