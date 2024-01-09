const items = [
  {name: 'Bike', price: 100},
  {name: 'TV', price: 200},
  {name: 'Album', price: 10},
  {name: 'Book', price: 5},
  {name: 'Phone', price: 500},
  {name: 'Computer', price: 1000},
  {name: 'Keyboard', price: 25},
];

// Filter method
const filteredItems = items.filter((item) => {
  return item.price <= 100;
})

// Map Method
const itemNames = items.map((item) => {
  return item.name;
})

// Find Method
const foundItem = items.find((item) => {
  return item.name === 'Book'
})

// forEach() Method
// items.forEach((item) => {
//   console.log(item.price * 2);
// })

// some() Method
const hasInexpensiveItems = items.some((item) => {
  return item.price <= 100;
})

// every() method
const allInexpensiveItems = items.every((item) => {
  return item.price <= 100;
})

// includes() Method
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5]
const includesTwo = nums.includes(9);

// concat() Method
const arr0 = [5, 2, 3, 0, 9];
const arr1 = [12, 51, 23, 69, 93];
const concArr = arr0.concat(arr1);
const concVal = arr0.concat(888)

// findIndex() Method
const itemIndex = items.findIndex((item) => {
  return item.price >= 500;
})

// indexOf() Method -> -1 if item not found
const val = nums.indexOf(2);
const val1 = nums.indexOf(5, 5);
//console.log(val1);

// lastIndexOf()
const last = nums.lastIndexOf(5);
const last1 = nums.lastIndexOf(5, 6);

// unshift() - add specified element to the beginning of an array
const numerals = [23, 24, 25, 26, 27, 28];
numerals.unshift(21, 22);

// pop() - removes the last element from an array and returns the element
const popNumerals = numerals.pop();
//console.log(popNumerals, numerals.length);

// shift() - removes the first element from an array and returns the element
const shiftNumerals = numerals.shift();
//console.log(shiftNumerals, numerals.length);

// toString()
const arrString = arr0.toString();
// console.log(arrString);

// join() - converts to string with custom separator
const joinString = arr0.join(' * ');
// console.log(joinString);

//fill(value, [start, end])
const testArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
testArr.fill(9, 6, 8);

// slice()
const testArr1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const slicedArr = testArr1.slice(1, 4);

// splice()
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'];
// console.log(months.splice(1, 2, 'Dec'));
// console.log(months);

// sort() behaves weirdly with numbers
const array1 = [1, 30, 4, 21, 100000];
array1.sort();
//console.log(array1);

// reverse() - reverses in place, thus modifies original array
months.reverse();
// console.log(months)

// Array.from()
const numSt = "12345";
const numArray = Array.from(numSt, (num) => {
  return parseInt(num);
});

// entries() keys() values()
const array2 = ['a', 'b', 'c'];
const iterator1 = array2.values();
// for (let val of iterator1) {
//   console.log(val);
// }
// console.log([...iterator1])

// Array.isArray()
//console.log(Array.isArray([]));

// flat()
const numbers = [[1, 2], [3, 4], [5, 6]]
const newNums = numbers.flat();
console.log(newNums);