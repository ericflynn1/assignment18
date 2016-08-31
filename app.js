// Write a function that returns the name's of all foods that can be eaten by 
//someone who is vegetarian with a gluten allergy

let foods = [
    {name: 'Toaster Strudel', vegetarian: true, glutenFree: false },
    {name: 'Chicken salad', vegetarian: false, glutenFree: true },
    {name: 'Coffee cake', vegetarian: true, glutenFree: true }
];
// If vegetarian = true and glutenFree = true, then return name.
function sadness(boo) {
   if (boo.vegetarian === true)
   if (boo.glutenFree === true) {
       return true
   } else {
       return false
   }
}
let veg = foods.filter(sadness).map(namer);
function namer(zero) {
    return zero.name
}
// let z = veg.map(namer);
console.log(veg);

// Write a function that returns and array of strings that present the product 
// name and price for all in stock items

let products = [
    {name: 'Soap dispenser', price: 12.45, inStock: true },
    {name: 'Chainsaw blade', price: 41.45, inStock: true },
    {name: 'Bath towel warmer', price: 87.14, inStock: false }
];
function goods(rot) {
    if (rot.inStock === true){
        return true
    } else {
        return false
    }
}
let stocks = products.filter(goods).map(merch);
function merch(blau) {
    return blau.name
}
console.log(stocks);

// Write a function that determines whether a number is a narcissistic number. 
// Return true if it is and false if it isn't.
// Need a funciton to convert the numbers into a string.
// Need a function to count the length of the digits in the string.
// Need a function to Math.pow each number to the length of the string.
// Need to add the numbers after they've been "exponentialized".
// Need to compare the answer to the original number and see if they match. True/False.
let nummers = [153];
let digits = nummers.toString().split('');
console.log(digits);
let expo = digits.length;
console.log(expo);
function exponent(digit, expo) {
    return Math.pow(digit, digits.length);
}
let answer = digits.map(exponent);
console.log(answer);
function combine(answer) {
    
}
// Need a function to decide whether a number is narcissistic
function checkIt(nummers, answer) {
    if (nummers === answer){ 
    return true
} else {
    return false
}
};
console.log(checkIt(nummers, answer));