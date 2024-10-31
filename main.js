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

document.getElementById("Button").addEventListener("click", SpOoOoOoOoky)

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

function SpOoOoOoOoky() {

let decision1 = Number(prompt("Are you suuuuuuure you want to continue? It's very spooky."))

if (decision1 == 1){

    let decision2 = Number(prompt("Wow, you're so good at not getting spooked, you already know how to play the game. Tell me, was it spooky?"))

    if (decision2 == 1){

        alert("Yaay! Well if that's the case, I will give you a bonus spook later. BEWARE! MOOHAHAHAHA! Good Luck!")}

    if (decision2 == 2){

        alert("Oh. Well at least it was entertaining enough to come back! Or you're a completionist who wants to see every ending. Either way, since you came back, I will give you an additional spook to make SURE you get scared this time. Good Luck!")}

    let BeginningSecret = 1
    
    }

if (decision1 == 2) {

    alert("Well, can't say I don't blame you. It's VERY spooky after all. Once you finish being spooked, you can come back and get EVEN MORE SPOOKED! MUAHAHAHAHA! ...j.k, Happy Halloween!")

    return}

if (decision1 !=1 && decision1 !=2) {

    alert("Well I can't hear you so I assume it's a good spookin' night. Prepare...TO GET SPOOKED! Have Fun and Happy Halloween!")

    let BeginningSecret = 0}

while (Instructions == false) {

let Instructions = false

let decision3 = Number(prompt("To begin, know that to enter decisions, you should type 1 for Yes, and 2 for No. If you type ANYTHING else from beyond this point, you will be booted out of the spook group. Are the instructions clear?"))

if (decision3 == 1) {

    alert("Cool. Let us BEGIN!")
    Instructions = true}

if (decision3 == 2) {

    alert("No")
    Instructions = true}


if (decision3 !=1 && decision3 !=2) {

    alert("Well, I can't tell so I will repeat my instructions (Btw, there is TOTALLY a secret if you repeat this 43 times. Do it. I know you want to.)")}

    let InstructionsSecret = 0
    InstructionsSecret ++

    if (InstructionsSecret == 43 && BeginningSecret == 1){

        alert("A faint glow eminates from the (fictional) instructions page. You feel the spookiness growing")}

        let SpookinessLevel = 1

    if (InstructionsSecret == 43 && BeginningSecret == 0){

        alert("There was no secret. You were lied to. If you really want the secret, restart the game and say Yes to the first question. Then come back here. Or don't, I'm not your mom.")}

    

}

alert("I will write more later, for now the class is done. Happy Halloween!")

}