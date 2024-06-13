// assignment 24
// Tests for equality nd inequality with strings
var string1 = "hello";
var string2 = "world";
console.log(string1 === string2); //false
console.log(string1 !== string2); //true
// Tests using the lower case funtion 
var upperCase = "HELLO";
var lowerCase = "hello";
console.log(upperCase.toLowerCase() === lowerCase); //true
// Numerical tests involving equality and inequality, greater than and less than, 
// greater than or equal to, and less than or equal to
var number1 = 10;
var number2 = 20;
console.log(number1 === number2); //false
console.log(number1 !== number2); //true
console.log(number1 > number2); //false
console.log(number1 < number2); //true
console.log(number1 >= number2); //false
console.log(number1 <= number2); //true
// Tests using "and" and "or" operators
var x = 20;
var y = 30;
var z = 40;
console.log(x < y && y < z); //true
console.log(x > y || y < z); //true
// Test whether an item is in a array
var array1 = [1, 2, 3, 4, 5, 6,];
var itemToFind = 3;
console.log(array1.indexOf(itemToFind) !== -1); //true
// Test whether an item is not in a array
console.log(array1.indexOf(10) === -1); //true