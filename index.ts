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
