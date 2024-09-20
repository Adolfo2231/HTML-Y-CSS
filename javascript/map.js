const arr = [1, 2, 3, 4, 5];

// The map() method creates a new array from calling a function for every array element. It does not modify the original array. The function we provide can have three parameters, same as last method.
// Output: [10, 20, 30, 40, 50]. Runs the function element by element and returns the element to a new array.
const newArr = arr.map(element => element * 10);
console.log(newArr);