function printSquareOfStars(size) {
    let i, j;

    if (size === 1) return '*';

    for (i = 0; i < size; i++) {        

        for ( j = 0; j < size; j++) {
            console.log('*');
        }
    }
}

console.log(printSquareOfStars(2));