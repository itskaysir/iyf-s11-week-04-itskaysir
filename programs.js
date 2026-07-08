for (let i = 1; i <= 100; i++) {
    console.log(i);
}

for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

let rows = 5;
for (let i = 1; i <= rows; i++) {
    console.log("*".repeat(i));
}
