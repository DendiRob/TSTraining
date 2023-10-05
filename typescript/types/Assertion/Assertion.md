## Type Assertions

Type assertions in TypeScript are a way to tell the compiler to treat a value as a specific type, regardless of its inferred type.

There are two syntaxes for type assertions in TypeScript:

- The “angle-bracket” syntax: `<T>value`
- The “as” syntax: value as `T`
___
For example you know what type function will return and you assume it in advanced!
There is important thing that TS cannot know what kind of element will be returned, but you might know.

```JS
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
```

There are three types of this type assertion:
**1**.
## As const
`as const` is a type assertion in TypeScript that allows you to assert that an expression has a specific type, and that its value should be treated as a read-only value.

For example:

```JS
const colors = ['red', 'green', 'blue'] as const;

// colors is now of type readonly ['red', 'green', 'blue']
```
**2**.
## As Type

as is a type assertion in TypeScript that allows you to tell the compiler to treat a value as a specific type, regardless of its inferred type.

For example:

```JS
let num = 42;
let str = num as string;

// str is now of type string, even though num is a number
```
**3**.
## As Any

`any` is a special type in TypeScript that represents a value of any type. When a value is declared with the any type, the compiler will not perform any type checks or type inference on that value.

For example:

```JS
let anyValue: any = 42;

// we can assign any value to anyValue, regardless of its type
anyValue = 'Hello, world!';
anyValue = true;
```