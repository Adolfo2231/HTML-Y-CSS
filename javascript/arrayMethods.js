const arr = ['a', 'b', 'c', 'd']
const arr1 = new Array(5)//Declarando un array de 5 elementos

// Buscara si se encuentra dicha letra o texto
console.log(arr.includes('d'));

// Buscara en que indice se encuentra dicha letra o texto
// Si muestra -1 no existe 
const index = arr.indexOf('d');
console.log(index);

// The .reverse() method is used to reverse an array.
// console.log(arr.reverse());

// The .fill() method is used to fill an array with a value. 
// arr1.fill("hi");
console.log(arr1)

// We can also specify a range to be filled, instead of the whole array.
// arr1.fill('Hi', 1, 4);
// console.log(arr1)

// The Array.isArray() method is a static method of the Array class.  this is how you check if a variable is an array:
const variableIsArray = Array.isArray(arr);
console.log(variableIsArray);


// Adding elements:
// This means add 2 elements starting from index 1 and the elements should be 'f' and 'g'.
arr.splice(2, 1, 'f', 'g'); 
console.log(arr)

// Removing elements
// This means starting at index 1, remove 2 elements.
arr.splice(1, 2); 
console.log(arr)