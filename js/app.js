'use strict';

let user = prompt('Welcome to the site! What is your name?');

alert(`Welcome ${user}, I'm Jeff, the owner of this website.\nThis is a trivia game about me so that you might get to know me. Enjoy!`);

let question = 'Have I ever traveled outside of the US?';
let correctanswer = 'yes';
let response = prompt(question).toLowerCase();
if (correctanswer === response){
  alert('Correct! I have traveled outside the US!');
} else if ('string' === typeof response) {
  alert('Oops, wrong answer.');
} else {
  alert('That wasn\'t even a word... \nMoving on.');
}

question = 'Do I hate learning?';
correctanswer = 'no';
response = prompt(question).toLowerCase();
if (correctanswer === response){
  alert('Correct! I don\'t hate learning, I love it!');
} else if ('string' === typeof response) {
  alert('Oops, wrong answer.');
} else {
  alert('That wasn\'t even a word... \nMoving on.');
}

