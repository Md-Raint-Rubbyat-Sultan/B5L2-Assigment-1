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

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const heigherThan4 = items.filter((item) => item.rating >= 4);

  console.log(heigherThan4);

  return heigherThan4;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const newArr: Array<T> = [];
  arrays.forEach((arr) => newArr.push(...arr));
  console.log(newArr);
  return newArr;
}

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

async function squareAsync(n: number): Promise<number> {
  const res: number = await new Promise((resolve, reject) => {
    if (n < 0) reject(new Error("Negative number not allowed"));

    setTimeout(() => resolve(Math.pow(n, 2)), 1000);
  });

  return res;
}
