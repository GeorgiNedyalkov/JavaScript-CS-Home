function calcCostOfFruit(type, weghtGrams, price) {
    let weightKilos = (weghtGrams / 1000).toFixed(2);
    let cost = (price * weightKilos).toFixed(2);
    return `I need $${cost} to buy ${weightKilos} kilograms ${type}`;
}

console.log(calcCostOfFruit('orange', 2500, 1.80));