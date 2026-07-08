const calculateArea = (length, width) => {
    return length * width;
}

calculateArea(5, 10); // Returns 50

const celciusToFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32;
}

celciusToFahrenheit(25); // Returns 77

const isEven = (number) => {
    return number % 2 === 0;
}

isEven(4); // Returns true

const getInitials = (fullName) => {
    const [firstName, lastName] = fullName.split(' ');
    return `${firstName[0]}${lastName[0]}`; 
};

getInitials('Kaysir Antony'); // Returns 'KA'

const reverseString = (str) => {
    return str.split('').reverse().join('');
}

reverseString('Hello'); // Returns 'olleH'

function tipBill(bill, tipPercent = 15) {
    const tipAmount = bill * (tipPercent / 100);
    return bill + tipAmount;
}

tipBill(100, 20); // Returns 120