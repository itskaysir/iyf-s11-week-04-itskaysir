const numbers = [-3, 1, 2, -8, 3, 4, 5, 10, 15];

numbers.forEach(num => console.log(num * 2 ));


const negativeNumbers = numbers.filter(num => num < 0);
console.log('Negative Numbers:', negativeNumbers);


const firstNumberGreaterThanTen = numbers.find(num => num > 10);
console.log('First Number Greater Than 10 is :', firstNumberGreaterThanTen);


const productOfNumbers = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log('Product of Numbers:', productOfNumbers);

