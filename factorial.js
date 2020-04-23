function calcFactorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }   

    return number * calcFactorial(number - 1);    
}

console.log(calcFactorial(5));

function factorial(n) {
    return (n != 0) ? n * factorial(--n) : 1; 
}

console.log(factorial(5));