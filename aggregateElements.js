function aggregateElements(arr) {

    let sumArr = calcArraySum(arr);
    let inversedValueArr = calcArraySum(arr.map(x => 1 / x));

    return `${sumArr}` + '\n' + `${inversedValueArr}` + '\n' + `${arr.join('')}`;  
}

function calcArraySum (arr) {
    return arr.reduce((sum , current) => sum + current, 0);
}

console.log(aggregateElements([2, 4, 8, 16]));
