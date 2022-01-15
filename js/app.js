'use strict';

let user = prompt('Welcome to the site! What is your name?');

alert(`Welcome ${user}, I'm Jeff, the owner of this website.\nPlay some guessing games with the following prompts. Enjoy!`);

const qarArray = [
  ['Have I ever traveled outside of the US?','yes','Correct! I have traveled outside the US!'],
  ['Do I hate learning?','no','Correct! I don\'t hate learning, I love it!'],
  ['Can I bake bread?','yes','Correct! I make delicious bread.'],
  ['Do I enjoy chili peppers?','no','Correct! I hate chili peppers and spicy food in general.'],
  ['Have I ever walked on the moon?','no','Nope. I\'d pay any sum of money to walk on the Moon.']
];

let correctcount = 0;

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

    } else if ('string' === typeof response) {
      alert('Sorry, wrong answer.');
    } else {
      alert('That wasn\'t even a word... \nMoving on.');
    }
  }
}

function guessNumber(){
  let magicNumber = Math.round(Math.random()*9+1);


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

function jollyRancher(){

  let favJRflavors = ['cherry','grape','watermelon'];

  for (let tries = 6; tries > 0; tries--){
    let answer = prompt(`Guess my one of favorite flavors of Jolly Rancher. You have ${tries} tries to guess one.`).toLowerCase();

    let correctGuess = false;

    for (let i = favJRflavors.length-1; i >= 0; i--){
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
