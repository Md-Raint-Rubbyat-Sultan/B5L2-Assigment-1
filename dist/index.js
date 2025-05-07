"use strict";
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
formatString("Hello"); // Output: "HELLO"
formatString("Hello", true); // Output: "HELLO"
formatString("Hello", false); // Output: "hello"
