example 
Type aliases in TypeScript mean “a name for any type.” They provide a way of creating new names for existing types. Type aliases don’t define new types; instead, they provide an alternative name for an existing type.  
Type aliases can be created using the `type` keyword, referring to any valid TypeScript type, including primitive types.

```JS
type MyNumber = number;
type User = {
  id: number;
  name: string;
  email: string;
}
```

In the above example, we create two type aliases: `MyNumber` and `User`. We can use `MyNumber` as shorthand for a number type and use `User type aliases` to represent the type definition of a user.