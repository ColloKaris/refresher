const item = [
  {name: 'Rice', price: 5},
  {name: 'Book', price: 20},
  {name: 'Chicken', price: 10},
  {name: 'Monitor', price: 100}
];

// reduce() used in summation

// const total = item.reduce((accumulator, it) => {
//   console.log(`Total: ${accumulator}`);
//   console.log(`Item: ${it.price}`);
//   return accumulator + it.price;
// }, 0)


// using reduce() to group people

const people = [
  {name: 'Kyle', age: 26},
  {name: 'John', age: 31},
  {name: 'Sally', age: 42},
  {name: 'Jill', age: 42}
];

// const result = people.reduce((groupedPeople, person) => {
//   const age = person.age;
//   if (!groupedPeople[age]) groupedPeople[age] = [];
//   groupedPeople[age].push(person);
//   return groupedPeople;
// }, {})

const number = [13, 2, 5];

const sum = number.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
})

console.log(sum);