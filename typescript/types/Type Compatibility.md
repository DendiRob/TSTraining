TypeScript uses structural typing to determine type compatibility. This means that two types are considered compatible if they have the same structure, regardless of their names.

```JS
interface Pet {
name: string;
}

class Dog {
name: string;
}

let pet: Pet;

// OK, because of structural typing
pet = new Dog();
```
