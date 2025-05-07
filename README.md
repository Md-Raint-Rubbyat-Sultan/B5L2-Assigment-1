# 1. What is the use of the keyof keyword in TypeScript? Provide an example.

## In TypeScripte we use the keyword 'keyof' to find the key of an object interface or type. It's the same as the method Object.keys() just it will return the values of the key of the property of the type assign to infare an object.

## Example:

type getUserInfo<T> = {
[K in keyof T]: T[k]
}

# 2. What is type inference in TypeScript? Why is it helpful?

## Type inference is the ability to determine the type of a variable without explicitly describing the type. This is helpful to user because sometimes the types does not need to say explicitly. On that time TypeScripte will automatically recognize the type.
