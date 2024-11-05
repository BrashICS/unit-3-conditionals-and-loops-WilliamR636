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

function menu() {
    
    let msg = `Hi! Please make a selection:
    1 - Play
    2 - Options
    3 - DLC
    4 - Check for Updates
    5 - Exit`

    let selection = Number(prompt(msg));

    if (selection == 1){

        alert("Let's play!")

        let msg2 = `Please select a difficulty:
        1 - Easy
        2 - Medium
        3 - Hard`

        let selection2 = Number(prompt(msg2));

        if (selection2 == 1) {

            alert("You selected the easy route.")
            return
        }

        else if (selection2 == 2) {

            alert("Most people select Medium.")
            return
        }

        else if (selection2 == 3) {

            alert("I see you like a challenge!")
            return
        }

    }

    else if (selection == 2){

        console.log("You selected options.")
        return
    }

    else if (selection == 3){

        console.log("No new DLC at this time.")
        return
    }

    else if (selection == 4){

        console.log("Everything is up to date.")
        return
    }

    else if (selection == 5){

        console.log("Bye!")
        return
    }


}

function greeting(hour) {

if (hour >= 0 && hour <= 11){

return `Good Morning!`

}

else if (hour >= 12 && hour <= 17){

return `Good Afternoon!`
    
}

else if (hour >= 18 && hour <= 23){

return `Good Evening!`
    
}

else {

return `Invalid hour!`
        
}

}

function two_digit() {

    let value = round(randInt(10, 99), 0)

    if (value == 0) {

        console.log(value)
        return 0

    }

    else if (value % 2 == 0 && value % 3 == 0) {

        console.log(value)
        console.log(`6x`)

    }

    else if (value % 2 == 1) {

        console.log(value)
        console.log(`Odd`)
        
    }

    if (value % 2 == 0) {

        return console.log(`Even`)
        
    }

    if (value % 2 == 1 && value % 3 != 0  && value % 5 != 0 && value % 7 != 0) {

        return console.log(`Prime`)
        
    }

    return

}

function Normal_House() {}

function Decrepit_Manion() {}

function Secret_Dog_House() {}

function Haunted_House() {}

function SpOoOoOoOoky() {

let SpookinessLevel = 0
let BeginningSecret = 0

let decision1 = Number(prompt("Are you suuuuuuure you want to continue? It's very spooky."))

if (decision1 == 1){

    let decision2 = Number(prompt("Wow, you're so good at not getting spooked, you already know how to play the game. Tell me, was it spooky?"))

    if (decision2 == 1){

        alert("Yaay! Well if that's the case, I will give you a bonus spook later. BEWARE! MOOHAHAHAHA! Good Luck!")}

    if (decision2 == 2){

        alert("Oh. Well at least it was entertaining enough to come back! Or you're a completionist who wants to see every ending. Either way, since you came back, I will give you an additional spook to make SURE you get scared this time. Good Luck!")}

     BeginningSecret = 1
    
    }

if (decision1 == 2) {

    alert("Well, can't say I don't blame you. It's VERY spooky after all. Once you finish being spooked, you can come back and get EVEN MORE SPOOKED! MUAHAHAHAHA! ...j.k, Happy Halloween!")

    return}

if (decision1 !=1 && decision1 !=2) {

    alert("Well I can't hear you so I assume it's a good spookin' night. Prepare...TO GET SPOOKED! Have Fun and Happy Halloween!")}

let InstructionsSecret = 0
let Instructions = false

while (Instructions == false) {

let decision3 = Number(prompt("To begin, know that to enter decisions, you should type 1 for Yes, and 2 for No. If you type ANYTHING else from beyond this point, you will be booted out of the spook group. Are the instructions clear?"))

if (decision3 == 1) {

    alert("Cool. Let us BEGIN!")
    Instructions = true}

if (decision3 == 2) {

    alert("Why?")
    Instructions = true}

if (decision3 == 6082 && BeginningSecret == 1){

    alert("You can see a faint glow eminating from the instructions page. You sense a small house has been filled with magic.")

    SpookinessLevel = 1}

if (decision3 !=1 && decision3 !=2 && (decision3 != 6082 && BeginningSecret !=1)) {

    if (InstructionsSecret == 25){

        alert("There was no secret. You were lied to. Made a fool of. You dummyhead, You buffoon, You imbecile, You figmenty-pigmenty crosser-tosser. Actually though, if you really want a secret, restart the game, then awnser yes to the first question. Afterwards, come back here and type 6082. Or don't, I'm not your mom.")}

        InstructionsSecret ++

    if (InstructionsSecret < 25){
        
        alert("Well, I can't tell if you understood my instructions or not so I will repeat them. (Btw, there is TOTALLY a secret if you repeat this 25 times. It is real. It is not made up to waste your time. It is there. Do it. I know you want to. Please trust me. It is 1000000032985% completely real. Trust me. Do it.)")}

    if (InstructionsSecret > 25){

        alert("You already found the secret. There is actually no more. Go away.")}
    
    }

}

alert("To set the scene, you are a small child Tricking and Treating your local neighborhood with spooky fervor. You are traveling with 3 friends, a small boy in a ghost costume, a small girl in a vampire costume, and a normal adult in a pirate costume.")

let Costume = Number(prompt("To begin, which of the spare costumes do you want (This is a rare choice, choose 1, 2, 3, or 4). The options are: 1. The grim reaper. 2. A mummy. 3. A skeleton. 4. A witch."))

if (Costume !=1 && Costume !=2 && Costume !=3 && Costume !=4){

alert("What did I just say about choosing numbers? Well you'll have to restart. Sorry. Good Luck on the next attempt though! Happy Halloween!")
    
return}

if (Costume == 1){

Costume = "Grim Reaper"}

if (Costume == 2){

Costume = "Mummy"}

if (Costume == 3){

Costume = "Skeleton"}

if (Costume == 4){

Costume = "Witch"}

alert(`You chose the ${Costume} costume. Good choice!`)

let decision4 = Number(prompt(`You, in your dashing ${Costume} costume, walk along the street with your friends. The wind feels refreshing and the leaves on the trees are a beautiful shade of orange. You see 4 nearby houses. One with their lights on and Halloween decorations strewn about, one which looks like an abandoned and decrepit mansion, one which IS just a dog house, and one which looks like a normal Halloween-style haunted-house. Which would you like to visit first? 1. Normal House. 2. Decrepit Mansion. 3. Dog House. 4. Haunted House.`))

if (decision4 == 1){

Normal_House()}

if (decision4 == 2){

Decrepit_Mansion()}

if (decision4 == 3){

alert("You and your friends didn't know what they expected. But the dog certainly did. The dog LEAPS AT YOU and you all DIE...jk. The dog is friendly and lets you guys pet him. Your group decides that this is a pretty good way to spend their Halloween.After petting the dog and rubbing his belly, your group decides to call it a night. You leave fufilled, knowing that you got to pet a doggie. ENDING: 5/9. Dog Ending")}

if (decision4 == 3 && SpookinessLevel == 1){

Secret_Dog_House()}

if (decision4 == 4){

Haunted_House()}

if (decision4 !=1 && decision4 !=2 && decision4 !=3 && decision4 !=4){

alert("What did I say about choosing numbers? Well you'll have to restart. Sorry but that's how it is. Good Luck on the next attempt though! Happy Halloween!")}

}