function factorial(n) {
    return (n != 0) ? n * factorial(--n) : 1; 
}
console.log(factorial(5));


function iterativeFactorial(n) {
    let result = 1;

    while(n > 0) {
        result *= n; 
        n--;
    }

    return result;
}
console.log(iterativeFactorial(5));