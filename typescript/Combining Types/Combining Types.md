

In TypeScript, you can combine types using type union and type intersection.

### Type Union:

The union operator `|` is used to combine two or more types into a single type that represents all the possible types. For example:

```JS
type stringOrNumber = string | number;
let value: stringOrNumber = 'hello';

value = 42;
```

### Type Intersection:

The intersection operator `&` is used to intersect two or more types into a single type that represents the properties of all the types. For example:

```JS
interface A {
  a: string;
}

interface B {
  b: number;
}

type AB = A & B;
let value: AB = { a: 'hello', b: 42 };
```