// Problem 1
function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === true) {
    console.log(input.toUpperCase());
    return input.toUpperCase();
  } else if (toUpper === false) {
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
function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
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
function concatenateArrays<T>(...arrays: T[][]): T[] {
  const newArr: Array<T> = [];
  arrays.forEach((arr) => newArr.push(...arr));
  console.log(newArr);
  return newArr;
}

// Example as given
concatenateArrays(["a", "b"], ["c"]); // Output: ["a", "b", "c"]
concatenateArrays([1, 2], [3, 4], [5]); // Output: [1, 2, 3, 4, 5]

// Problem 4
class Vehicle {
  constructor(private _make: string, private year: number) {}

  getInfo(): string {
    console.log(`Make: ${this._make}, Year: ${this.year}`);
    return `Make: ${this._make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(
    protected name: string,
    protected createdAt: number,
    private model: string
  ) {
    super(name, createdAt);
  }

  getModel(): string {
    console.log(`Model: ${this.model}`);
    return `Model: ${this.model}`;
  }
}

// Example as given
const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo(); // Output: "Make: Toyota, Year: 2020"
myCar.getModel(); // Output: "Model: Corolla"

// Problem 5
function processValue(value: string | number): number {
  let outVal: number = 0;
  if (typeof value === "string") {
    console.log(value.length);
    outVal = value.length;
  } else if (typeof value === "number") {
    console.log(value * 2);
    outVal = value * 2;
  }
  return outVal;
}

// Example as given
processValue("hello"); // Output: 5
processValue(10); // Output: 20

// Problem 6
interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;

  let heighestPrice: Product = products[0];
  products.forEach((product) => {
    if (product.price > heighestPrice.price) heighestPrice = product;
  });

  console.log(heighestPrice);
  return heighestPrice;
}

// Example as given
const products: Array<Product> = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];

getMostExpensiveProduct(products);
// Output: { name: "Bag", price: 50 }

// Problem 7
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
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
async function squareAsync(n: number): Promise<number> {
  const res: number = await new Promise((resolve, reject) => {
    if (n < 0) reject(new Error("Negative number not allowed"));

    setTimeout(() => resolve(Math.pow(n, 2)), 1000);
  });

  return res;
}

// Example as given
squareAsync(4).then(console.log); // Output after 1s: 16
squareAsync(-3).catch(console.error); // Output: Error: Negative number not allowed
