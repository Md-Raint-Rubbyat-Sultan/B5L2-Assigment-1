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
  let newArr: Array<any> = [];
  arrays.forEach((arr) => {
    newArr = [...newArr, ...arr];
  });
  console.log(newArr);
  return newArr;
}

// Example as given
concatenateArrays(["a", "b"], ["c"]); // Output: ["a", "b", "c"]
concatenateArrays([1, 2], [3, 4], [5]); // Output: [1, 2, 3, 4, 5]
