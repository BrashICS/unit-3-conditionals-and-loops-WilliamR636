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
document.getElementById("guess").addEventListener("click", guess_10);

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

function is_number(num) {

if (typeof num == 'number'){

    return true}

else{

    return false}

}

function which_day(n) {

if (is_number(n) == false){

    return `Invalid type`}

else if (n == 1){

    return `Sunday`}

else if (n == 2){

    return `Monday`}

else if (n == 3){

    return `Tuesday`}

else if (n == 4){

    return `Wednesday`}

else if (n == 5){

    return `Thursday`}

else if (n == 6){

    return `Friday`}

else if (n == 7){

    return `Saturday`}

else{

return `Invalid value`}

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

else if (decision3 == 2) {

    alert("Why?")
    Instructions = true}

else if (decision3 == 6082 && BeginningSecret == 1){

    alert("You can see a faint glow eminating from the instructions page. You sense a small house has been filled with magic.")

    SpookinessLevel = 1}

else {

    if (InstructionsSecret == 25){

        alert("There was no secret. You were lied to. Made a fool of. You dummyhead, You buffoon, You imbecile, You figmenty-pigmenty crosser-tosser. Actually though, if you really want a secret, restart the game, then awnser yes to the first question. Afterwards, come back here and type 6082. Or don't, I'm not your mom.")}

        InstructionsSecret ++

    if (InstructionsSecret < 25){
        
        alert("Well, I can't tell if you understood my instructions or not so I will repeat them. (Btw, there is TOTALLY a secret if you repeat this 25 times. It is real. It is not made up to waste your time. It is there. Do it. I know you want to. Please trust me. It is 1000000032985% completely real. Trust me. Do it.)")}

    else if (InstructionsSecret > 25){

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

if (decision4 == 3 && SpookinessLevel != 1){

alert("You and your friends didn't know what they expected. But the dog certainly did. The dog LEAPS AT YOU and you all DIE...jk. The dog is friendly and lets you guys pet him. Your group decides that this is a pretty good way to spend their Halloween.After petting the dog and rubbing his belly, your group decides to call it a night. You leave fufilled, knowing that you got to pet a doggie. ENDING: 5/9. Dog Ending")}

if (decision4 == 3 && SpookinessLevel == 1){

Secret_Dog_House()}

if (decision4 == 4){

Haunted_House()}

if (decision4 !=1 && decision4 !=2 && decision4 !=3 && decision4 !=4){

alert("What did I say about choosing numbers? Well you'll have to restart. Sorry but that's how it is. Good Luck on the next attempt though! Happy Halloween!")}

}

function guess_10() {

let Answer = round(randInt(1,10), 0)

let Guess = Number(prompt("Guess a number between 1-10"))

if (is_number(Guess) == false){

    console.log(`An unidentified error has occurred. Please stop being the unidentified error.`)
    return}

else if (Guess == Answer) {

    console.log(`You have sucessfully guessed the correct number. Good job!`)
    return}

else if (Guess % 1 == 0 && Guess >= 1 && Guess <= 10 && Guess < Answer) {

    console.log(`Your guess was too low. The correct answer was ${Answer}`)
    return}
    
else if (Guess % 1 == 0 && Guess >= 1 && Guess <= 10 && Guess > Answer) {

    console.log(`Your guess was too high. The correct answer was ${Answer}`)
    return}

else {

    console.log(`Your guess was not between 1-10 or a non-whole number. The correct answer was ${Answer}`)
    return}

}

function countdown(start, stop) {

    let starting = start

    if (start <= stop) {

        return -1}
        
    while (starting >= stop){

        console.log(starting)
        starting --}

    return start - stop + 1
}

function random_until(min, max, stop) {

    if (stop < min || stop > max || max <= min || stop % 1 != 0 || min % 1 != 0 || max % 1 != 0) {

        return -1}
        
    let value = randInt(min, max)

    while (value != stop){

        console.log(value)
        value = randInt(min, max)}

    return stop

}

function average(n) {

    let loops = 1
    let number = 0

    while (loops <= n){

     number = number + Number(prompt(`Choose value ${loops}/${n}`))

     loops ++}

    return number / n

}

function print_reverse(str) {

    let number = 1
    let reverse = ""

    while (number <= str.length) {

        reverse += str[str.length - number]
        number ++}
    
    return reverse

}

function dragons_and_goblins(str) {

    let Goblins = 0
    let Dragons = 0
    let Counting = 0

    while (Counting <= str.length) {

        if (str[Counting] == String.fromCharCode(100)){

            Dragons ++}

        else if (str[Counting] == String.fromCharCode(103)) {

            Goblins ++}

        Counting ++}

    return `Dragons: ${Dragons} Goblins: ${Goblins}`

}

function add(str) {

    let Result = 0
    let Counting = 0

    while (Counting < str.length) {

        Result = Result + Number(str[Counting])
        Counting ++}

    return Result

}

function add_subtract(str) {

    let Result = 0
    let Counting = 0

    while (Counting < str.length) {

        if (str[Counting] == String.fromCharCode(45)) {

            Counting ++
            Result = Result - Number(str[Counting])}

        else {

            Result = Result + Number(str[Counting])}

        Counting ++}

    return Result

}

function print_odd(n) {

    let NumberThing = 1

    if (n < 1 || !is_number(n)){

        return}

    else {

        do {
            
            console.log(NumberThing)
            NumberThing = NumberThing + 2

        } while (n >= NumberThing)}
}

function negative_only() {

    let output;

    do {

        output = +prompt("Enter a negative number: ");

    } while (output >= 0)

    return output

}

function parrot() {

    let output;

    do {

        output = prompt("Please enter some text or type the word \"quit\" to exit: ");
        console.log(output)

        if (output.toLowerCase() != "quit") {

            console.log(output.toUpperCase())}

    } while (output.toLowerCase() != "quit")

    return "GOODBYE!"

}

function factorial(n) {

    let output = n;
    let number = n;

    if (!is_number) {

        return}

    else if (number > 1) {

        do {

            number --;
            output = output * (number);

        } while (number > 1)

    return output}

    else if (n == 1 || n == 0) {return 1}

}

function count_up(start, stop) {

    for (let x = start; x <= stop; x++) {

        console.log(x)}

    return
}

function count_down(start, stop) {

    for (let x = start; x >= stop; x--) {

        console.log(x)}

    return
}

function print_chars(str, step) {

    for (let x = 0; x <= str.length; x += step) {

        console.log(str[x])}

    return

}

function sum(n) {

    let y = 0;

    for (let x = 1; x <= n; x++) {

        y += x}

    return y;

}

function count_four(begin, end) {
    
    let z = 0

    for (let x = begin; x <= end; x++) {

        if (x % 4 == 0){

        z++}}

    return z;

}

function sum_divisible(n, x) {
    
    let z = 0

    for (let y = x; y <= n; y += x) {

        z += y}

    return z;

}

function count_char(str, char) {

    let z = 0

    for (let y = 0; y <= str.length; y++) {

        if (str[y] == char[0]) {

            z++}}

    if (z == 0) {

        return -1}

    else {

        return z}

}

function print_codes(str) {

    for (let y = 0; y < str.length; y++) {

        console.log(str.charCodeAt(y))}

    return
}

function determine_case(c) {

    let x = c.charCodeAt(0)

    if (65  <= x && 90 >= x) {

        return "U"}

    else if (97  <= x && 122 >= x) {

        return "L"}

    else if (48  <= x && 57 >= x) {

        return "N"}

    else {

        return "S"}

}

function print_case(str) {

    let z = ""

    for (let y = 0; y < str.length; y++) {
    
        z += determine_case(str[y])}

    return z

}

function tail(str, n) {

    let z = ""

    if (!is_number(n) || n < 0 || n > str.length) {

        return -1}

    for (let y = n; y > 0; y--) {

        z += str[str.length-y]}

    return z

}

function print_line(char, width) {

    let z = ""

    for (let y = 0; y < width; y++) {

        z += char}
    console.log(z)

}

function print_rectangle(char, height, width) {

    for (let y = 0; y < height; y++) {

        print_line(char, width)}

}

function fib_sequence(n) {

    if (!is_number(n) || n < 0) {

        return -1}

    let z = ""
    let x = 0
    let w = 1

    for (let y = 0; y < n; y++) {

        z += `${x}`

        if (y != n - 1) {
            z += ", "}

        w = w + x
        x = w - x}

    console.log (z)
}

function squirrel_crypt(str) {

    let z = ""

    for (y = 0; y < str.length; y++)

        console.log(z)

}

function reversed(str) {

    let z = ""
    let y = 0

    if (str.charCodeAt >= 65 && str.charCodeAt <= 90) {

        y += 91 - str.charCodeAt
        y = 26 - y
        y = y + 65}

}