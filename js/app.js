'use strict';

let user = prompt('Welcome to the site! What is your name?');

alert(`Welcome ${user}, I'm Jeff, the owner of this website.\nPlay some guessing games with the following prompts. Enjoy!`);

// Personal trivia Yes/No questions

// here is my question & answer & response array.
// I'm using a 2D array as each question will have a set of 3 variables, a question, an answer, and a response
// A more semantic solution would be to create a Question object with properties .question, .answer, and .response
const qarArray = [
  ['Have I ever traveled outside of the US?','yes','Correct! I have traveled outside the US!'],
  ['Do I hate learning?','no','Correct! I don\'t hate learning, I love it!'],
  ['Can I bake bread?','yes','Correct! I make delicious bread.'],
  ['Do I enjoy chili peppers?','no','Correct! I hate chili peppers and spicy food in general.'],
  ['Have I ever walked on the moon?','no','Nope. I\'d pay any sum of money to walk on the Moon.']
];

let correctcount = 0;
//console.table(qarArray);
personalTrivia();

guessNumber();

jollyRancher();

function personalTrivia(){
  alert('The following questions will quiz you on some random facts about me. Please answer yes or no.');

  for (let i = qarArray.length-1; i >= 0; i--){
    let response = prompt(qarArray[i][0]);
    if (qarArray[i][1] === response.toLowerCase()){
      correctcount++;
      alert(qarArray[i][2]);
    //console.log(`Correct on "${qarArray[i][0]}"`);
    } else if ('string' === typeof response) {
      alert('Sorry, wrong answer.');
    } else {
      alert('That wasn\'t even a word... \nMoving on.');
    }
  }
}
// Number guessing game

// This randomly generates the "magic number".
// Math.random() returns a random decimal between 0 and 1
// I then multiply by 9 and add 1. The resulting decimal number should always be between 1 and 10.
// Then Math.round() rounds the decimal number to the nearest integer
function guessNumber(){
  let magicNumber = Math.round(Math.random()*9+1);
  //console.log(magicNumber);

  for (let i = 4; i > 0; i--){
    let correctGuess = false;

    let guessnum = parseInt(prompt(`Guess the magic number! It's a whole number between 1 and 10. You have ${i} tries.`));
    if (guessnum === magicNumber){
      i = 1;
      alert(`You got it! The magic number is ${magicNumber}.`);
      correctcount++;
      correctGuess = true;
    } else if (guessnum > magicNumber){
      alert('Nope! That\'s too high.');
    } else if (guessnum < magicNumber){
      alert('Nope! That\'s too low.');
    } else {
      alert('Nope! That wasn\'t a valid number.');
    }

    if(!correctGuess && i === 1){
      alert(`You've run out of tries. The magic number is ${magicNumber}.`);
    }
  }
}
// Jolly Rancher multiple-answer guessing game
function jollyRancher(){
// In this array I'm defining my favorite flavors of Jolly Rancher
  let favJRflavors = ['cherry','grape','watermelon'];

  // This for loop limits the number of attempts to 6
  for (let tries = 6; tries > 0; tries--){
    let answer = prompt(`Guess my one of favorite flavors of Jolly Rancher. You have ${tries} tries to guess one.`).toLowerCase();
    //console.log(answer);

    // this boolean variable needs to exist to silence the failure prompts if the user's answer was correct
    // I believe I could avoid this with a break statement
    let correctGuess = false;

    // this for loop will check the answer against each string in the array
    for (let i = favJRflavors.length-1; i >= 0; i--){
      //console.log('the answer checker loop ran');
      if(favJRflavors[i] === answer){
        alert(`Success! You guessed one of my favorite flavors! They are ${favJRflavors[0]}, ${favJRflavors[1]}, and ${favJRflavors[2]}.`);
        tries = 1;
        correctcount++;
        correctGuess = true;
      }
    }
    if(!correctGuess){
      alert('Nope! That\'s not one of them.');
    }

    if(!correctGuess && tries === 1){
      alert(`You've run out of tries. My favorite flavors are ${favJRflavors[0]}, ${favJRflavors[1]}, and ${favJRflavors[2]}.`);
    }
  }
}
alert(`Thanks for playing ${user}. You got ${correctcount} out of 7 questions correct.`);
