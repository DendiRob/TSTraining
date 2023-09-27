`unknown` is the type-safe counterpart of any. Anything is assignable to `unknown`, but `unknown` isn’t assignable to anything but itself and `any` without a type assertion or a control flow based narrowing. Likewise, no operations are permitted on an `unknown` without first asserting or narrowing to a more specific type.
```
function f1(a: any) {
  a.b(); // OK
}

function f2(a: unknown) {
  // Error: Property 'b' does not exist on type 'unknown'.
  a.b();
}
```
this exanple shows us how we should use this type.
You wont be able to work if type is unknown, but if you check what type it is, you will be able to manage this value how you want.
smth like that 
```
let data: unknown = getSomeValueFromSomeWhere(); 
if (typeof data === 'string') { 
//данные — строка. } 
else if (Array.isArray(data)) { 
//данные — массив. } 
else if (typeof data === 'object') {
//данные — объект. 
}
```
