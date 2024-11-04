//Унарні оператори 
let x = 4;
x++;
console.log(x);

x--;
console.log(x);

let y = -x;
console.log(y);

let isTrue = !false;
console.log(isTrue);

let z = typeof x;
console.log(z);

//Бінарні оператори
let a = 4;
let b = 2;

let sum = a + b;
console.log(sum);

let diff = a - b;
console.log(diff);

let product = a * b;
console.log(product);

let division = a / b;
console.log(division);

let remainder = a % b;
console.log(remainder);

let pow = a ** b;
console.log(pow);

let isEqual = a == b;
console.log(isEqual);

let isStrictEqual = a === b;
console.log(isStrictEqual);

//Тернарні оператори
let age = 18;
let message = (age >= 18) ? "Ти вже дорослий!" : "Ти ще дитина!";
console.log(message);