// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14
const userName ='Isra';
let age = '28';

let a = 5;
let b = 10;

console.log(a + b);

let c = a + b;

const thisIsANumber = 18;
let THIS_IS_A_NUMBER = 10;

function sayHey(name = 'Visual ', surname = 'Studio Code') {
    console.log('hey ' + name + surname)
};

sayHey();

function conversation() {
    sayHey('Isra ', 'Idris')
    console.log('How are you?')
    console.log('Goodbye')
};

conversation();

sayHey('Black ', 'Codher')
sayHey('Tobia ', 'Donati')

function futureAge(firstName, currentAge) {
    const calculatedAge  = currentAge + 5;
    return "Hi " + firstName + " you will be " + calculatedAge + " years old in 5 years";
}

console.log(futureAge('Isra', 28))


