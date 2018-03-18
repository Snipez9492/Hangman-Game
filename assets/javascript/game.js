// var rappers = ["Jay Z", "Nas", "Andre 3000", "Drake", "Kendrick Lamar"];
var rappers = ["JayZ", "Nas", "Andre 3000", "Drake", "Kendrick Lamar"];
var wins = 0;
var losses = 0;
var guessleft = 10;
var unanswered = [];
var correctAns = [];
var letterguess = [];

    var computerGuess = rappers[Math.floor(Math.random() * rappers.length)];
    // unanswered = rappers.splice(" ");
    // console.log("rappers.splice: ",unanswered)

    var compGuessArray = computerGuess.toLowerCase().split("");

    console.log("This is the array: " + compGuessArray);
    for(var i = 0; i < compGuessArray.length; i++){
        unanswered.push("_");
    }
        console.log("unanswered: ", unanswered);



function evalGuess(person_guess) {
    if (guessleft => 1) {
        // for loops need to loop through arrays
        guessleft--;
        console.log('Guesses: ', guessleft);
        for (var i = 0; i < compGuessArray.length; i++) {
            // We are trying create a new array that consists of "_" for every letter of the word the computer chose
            if (person_guess === compGuessArray[i]) {
                console.log('if person: ',person_guess, "if compG: ",compGuessArray)
                unanswered.splice(i, 1, person_guess);
                console.log('correct: ',unanswered);
            }
        }
        letterguess.push(person_guess);
        console.log("Wrong ",letterguess);
    } else {
        alert("You ran out of chances")
    }
}
// console.log(unanswered.join(" "));


document.onkeyup = function (event) {
    // takes in a key and saves in variable person_guess
    var person_guess = event.key;
    console.log("Person Guess is: " + person_guess);
    evalGuess(person_guess.toLowerCase());
}
