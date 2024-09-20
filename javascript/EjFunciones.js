function factorial(number) {
    let factorial = 1;
    let counter = number
    console.log(counter)
    for(let i = 0; i < number; i++){
        factorial *= counter
        counter--
    }
    return factorial
}

let print = factorial(5)
console.log(print)