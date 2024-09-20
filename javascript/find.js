let arr = [1, 2, 3, 4, 5]

// The find() method returns the value of the first element that passes a test. It does not modify the original array. The function we provide can still have the same three parameters.
// const elementThatPasses = arr.find(element => element > 2 && element < 4);
// console.log(elementThatPasses);

// Checks if any of the elements inside of the array pass a test.
// const numsAbove3InArr = arr.some(num => num > 3);
// console.log(numsAbove3InArr);

// Checks if every element inside of the array pass a test
const numsAbove3InArr = arr.every(num => num > 3);
console.log(numsAbove3InArr);