function sumSequenceOfNumbers(numberOne, numberTwo) {
    let n = Number(numberOne);
    let m = Number(numberTwo);
    let sum = 0;

    for (let i = n; i <= m; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumSequenceOfNumbers('1', '10'));