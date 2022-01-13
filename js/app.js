'use strict';

let user = prompt('Welcome to the site! What is your name?');

alert(`Welcome ${user}, I'm Jeff, the owner of this website.\nPlay some guessing games with the following prompts. Enjoy!`);


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

console.table(qarArray);

let correctcount = 0;

alert('The following questions will quiz you on some random facts about me. Please answer yes or no.');

for (let i = qarArray.length-1; i >= 0; i--){
  let response = prompt(qarArray[i][0]);
  if (qarArray[i][1] === response.toLowerCase()){
    correctcount++;
    alert(qarArray[i][2]);
    console.log(`Correct on "${qarArray[i][0]}"`);
  } else if ('string' === typeof response) {
    alert('Sorry, wrong answer.');
  } else {
    alert('That wasn\'t even a word... \nMoving on.');
  }
}

alert(`Thanks for playing ${user}. You got ${correctcount} out of 7 questions correct.`);

// This is the previous code for the personal trivia. I made a format that I could easily copy and paste. I would have used a function if it wasn't out of scope of the material.

/*
let question = 'Have I ever traveled outside of the US?','yes';
let correctanswer = 'yes';
let response = prompt(question);
if (correctanswer === response.toLowerCase()){
  correctcount++;
  alert('Correct! I have traveled outside the US!');
  //console.log(`Correct on "${question}"`);
} else if ('string' === typeof response) {
  alert('Sorry, wrong answer.');
} else {
  alert('That wasn\'t even a word... \nMoving on.');
}

question = 'Do I hate learning?';
correctanswer = 'no';
response = prompt(question);
if (correctanswer === response.toLowerCase()){
  correctcount++;
  alert('Correct! I don\'t hate learning, I love it!');
  //console.log(`Correct on "${question}"`);
} else if ('string' === typeof response) {
  alert('Sorry, wrong answer.');
} else {
  alert('That wasn\'t even a word... \nMoving on.');
}

question = 'Can I bake bread?';
correctanswer = 'yes';
response = prompt(question);
if (correctanswer === response.toLowerCase()){
  correctcount++;
  alert('Correct! I make delicious bread.');
  //console.log(`Correct on "${question}"`);
} else if ('string' === typeof response) {
  alert('Sorry, wrong answer.');
} else {
  alert('That wasn\'t even a word... \nMoving on.');
}

question = 'Do I enjoy chili peppers?';
correctanswer = 'no';
response = prompt(question);
if (correctanswer === response.toLowerCase()){
  correctcount++;
  alert('Correct! I hate chili peppers and spicy food in general.');
  //console.log(`Correct on "${question}"`);
} else if ('string' === typeof response) {
  alert('Sorry, wrong answer.');
} else {
  alert('That wasn\'t even a word... \nMoving on.');
}

question = 'Have I ever walked on the moon?';
correctanswer = 'no';
response = prompt(question);
if (correctanswer === response.toLowerCase()){
  correctcount++;
  alert('I\'d pay any sum of money to walk on the Moon.');
  //console.log(`Correct on "${question}"`);
} else if ('string' === typeof response) {
  alert('Regrettably, I have not walked on the moon and your answer is right out.');
} else {
  alert('That wasn\'t even a word... \nMoving on.');
}
*/
