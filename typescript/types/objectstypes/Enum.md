Enum is a way which help you to implicitly set the value you need.
smth like that

```
enum Position {
  Director = 'Генеральный директор',
  Seller = 'Продавец'
}
```
```
const person: Person = {
    name: 'Иван',
    age: 35,
    position: Position.Director
  }
```
This is a good example of how Enum works. We have defined the value of the position, we only have the director and the seller that we need to use for the values of the objects, and ts will help us if we change a value that does not exist

good artical https://habr.com/ru/articles/728202/