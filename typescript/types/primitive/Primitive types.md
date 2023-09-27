There is the same set of types like in js, but we have some exceptions.
One of that is 'void'.
	This type of function which dont return anything (value)
```
// The inferred return type is void
function noop() {
  return;
}
```
How this looks in TS:
```
let isTrue: boolean = true;
let isFalse: number = 2;
etc
```
