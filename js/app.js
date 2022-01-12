'use strict';

let user = prompt('Welcome to the site! What is your name?');

alert(`Welcome ${user}, I'm Jeff, the owner of this website.\nThis trivia game will quiz you about my life. Enjoy!`);

//I'm using this format so that I can easily copy and paste. I would use a function if it wasn't out of scope of the material.

let question = 'Have I ever traveled outside of the US?';
let correctanswer = 'yes';
let response = prompt(question).toLowerCase();
let correctcount = 0;
if (correctanswer === response){
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
response = prompt(question).toLowerCase();
if (correctanswer === response){
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
response = prompt(question).toLowerCase();
if (correctanswer === response){
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
response = prompt(question).toLowerCase();
if (correctanswer === response){
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
response = prompt(question).toLowerCase();
if (correctanswer === response){
  correctcount++;
  alert('I\'d pay any sum of money to walk on the Moon.');
  //console.log(`Correct on "${question}"`);
} else if ('string' === typeof response) {
  alert('You serious?');
} else {
  alert('That wasn\'t even a word... \nMoving on.');
}

alert(`Thanks for playing ${user}. You got ${correctcount} out of 5 questions correct.`);
