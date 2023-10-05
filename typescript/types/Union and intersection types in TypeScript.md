

In TypeScript, union and intersection types are used to compose or model types from existing types.

These new composed types behave differently, depending on whether they were composed through a union or intersection of the existing type they were formed from.

Defined in the Advanced Types section of Typescript, an intersection type is a type that combines several types into one; a value that can be any one of several types is a union type.

The `&` symbol is used to create an intersection, whereas the `|` symbol is used to represent a union. An intersection can be read as an `And` operator and a union as an `Or`.

Let’s explore further how this applies to our TypeScript code.

that function can have two types of param(string and number)

```JS
function direction(param: string | number ) {
  ...
}
```

### Conditional intersection via union type

```JS
type FilesReader = (Files & ErrorHandling) | any;

FilesReader = {
  success: "false",
  error: {message: "not found"},
  content: "no file"
}
```
 There are two available types The first one (Files) for good outcome the second one (ErrorHandling) for bad outcome
 