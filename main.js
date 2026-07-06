let myName = "Kaysir Antony";
let myAge = 23;
let myCountry = "Kenya";
let amStudent = true;

console.log("My name is " + myName + ", I am " + myAge + " years old and I live in " + myCountry + ".");
console.log("Am I a student? " + amStudent);

const myParents = {
    father: "Alloys Tinega Ochako",
    mother: "Naomi Onduso",
};
const myFavoriteColors = ["Blue", "Cyan", "Black", "Golden Yellow", "White"];
console.log("My father's name is " + myParents.father + " and my mother's name is " + myParents.mother + ".");
console.log("My favorite colors are: " + myFavoriteColors.join(", ") + ".");

let today = new Date();
console.log("Today's date is: " + today.toDateString() + ".");