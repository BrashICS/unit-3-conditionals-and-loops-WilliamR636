/**
 * Unit 3 - Conditionals and Loops
 * ICS3 - Mr. Brash 🐿️
 * 
 * For this unit, Mr. Brash is trying something different. Each lesson will
 * be in this one repository, separated in the Lessons folder.
 * 
 * If you run into Git or Github issues, call Mr. Brash over.
 **/ 


'use strict';

/*** Event Listeners ***/



/*** Functions ***/

// A very accurate rounding function
function round(value, decimals) {
    let multiplier = 10**decimals;
    return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}

// Get a random number from min to max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function user() {

let age = Number(prompt(`What is your age?`))

if (age >= 60)

    console.log(`You qualify for the senior discount!`);

if (age < 16)

    console.log(`You're not old enough to drive yet.`);

if (age == 44)

    console.log(`You're the same age as Mr.Squirrel`);

let user_name = prompt(`What is your name?`)

if (user_name == "Mr. Squirrel")

    console.log(`🐿️`);

if (user_name.length > 7)

    console.log(`You have a long name.`);

if (user_name.length % 2 !=0)

    console.log(`Your name is odd`);

else 

    console.log(`Your name is even`);

let quiz = Number(prompt(`How long do you think their name is?`))

if (quiz == user_name.length)

    console.log(`That's correct! ✔️`);

if (user_name.length > quiz)

    console.log(`Too low ✖️`);

if (user_name.length > quiz)

    console.log(`Too high ✖️`);
}

function longer_string(str1, str2) {

if (str1.length > str2.length)

    return `${str1}`;

if (str1.length == str2.length)

    return `${str1}, ${str2}`;

if (str1.length < str2.length)

    return `${str2}`;

}

function discriminant(a, b, c) {

let value = b**2 - (4*a*c)

if (value > 0)

    return (`There are 2 zeros.`)

if (value == 0)

    return (`There are INFINATE zeros. MUAHAHAHA`)

if (value < 0)

    return (`There are 0 zeros. 0s? Zer 0's? I don't kn0ws.`)
        
}