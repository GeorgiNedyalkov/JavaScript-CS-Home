function calcSumAvgStringLength(first, second, third) {
    let sumLength; 
    let avgLength; 
    
    sumLength = first.length + second.length + third.length;
    avgLength = Math.floor(sumLength / 3); 

    return `${sumLength} \n${avgLength}`;
}

console.log(calcSumAvgStringLength('pasta', 'cake', '1'));


