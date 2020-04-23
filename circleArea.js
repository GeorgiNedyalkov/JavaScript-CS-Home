function calCircleArea(radius) {
    let circleArea;

    if (typeof radius !== "number") {        
        return 'We can not calculate the circle area, because we receive a string.';
    } else {
        circleArea = Math.PI * (radius ** 2);
        return circleArea.toFixed(2);
    }
}
console.log(calCircleArea(5));




