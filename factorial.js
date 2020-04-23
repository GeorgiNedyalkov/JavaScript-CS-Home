function calcFactorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }   

    return number * calcFactorial(number - 1);    
}

console.log(calcFactorial(5));