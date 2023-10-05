
The non-null assertion operator (!) is a type assertion in TypeScript that allows you to tell the compiler that a value will never be null or undefined.

```JS
let name: string | null = null;

// we use the non-null assertion operator to tell the compiler that name will never be null
let nameLength = name!.length;
```

By using the `!` assertion you're basically telling the compiler "shut up, I know better, this never gonna be null". The compiler has no option but to agree with you, but if you don't keep your promise (which you don't), a run time fault is imminent.

```JS
let nameLength = name!.length;
```

Exclamation mark, after variables we type, tells us that name(we declared it before) never be null or undefined.