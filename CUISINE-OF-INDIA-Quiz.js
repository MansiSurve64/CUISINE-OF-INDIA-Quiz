//JavaScript - CLI Quiz


var readlineSync = require('readline-sync');
const chalk = require('chalk');
var username = readlineSync.question('Enter Your Name: ');

console.log(chalk.red('CUISINE OF INDIA Quiz'));
console.log(chalk.red('let see how much do you know..'));
console.log(chalk.green(`"You always have a choice.” - Harvey Specter`))
console.log(chalk.yellow('Write the correct option.'))
console.log('Points:  Correct: +5   Incorrect: -2')
console.log('');



var questions = [
   {question: `What oil is characteristically used in the cooking of South India? `,
  A: 'coconut oil', 
	B:'pineapple oil',
	C:'canola oil',
  D:'olive oil',
	answer: 'a'
	},

   {question: `What is India’s national fruit?`,
   A: 'Orange',
   B:'Mango', 
   C:'Banana',
   D:'Grapes',
   answer: 'b'},

    {question: `What word is used in India for tea?`,
   A: 'cha',
   B:'oooh', 
   C:'chai',
   D:'ta',
   answer: 'c'},

   {question: `What is the name for a popular Indian dessert dish?`,
   A: 'gulab jamun',
   B:'chai', 
   C:'samosa',
   D:'pani-puri',
   answer: 'a'},
   
   {question: `What is the main ingredient of gaajar ka halwa?`,
   A: 'carrot',
   B:'lentil', 
   C:'tomato',
   D:'potato',
   answer: 'a'},
   
   {question: `Which of these ingredients forms the base of the Indian food called raita?`,
   A: 'butter',
   B:'yogurt', 
   C:'cheese',
   D:'mayonnaise',
   answer: 'b'},
  
   {question: `Which of these is a savory deep-fried cake that contains vegetables?`,
   A: 'puri',
   B:'kachori', 
   C:'kheer',
   D:'pakora',
   answer: 'd'},
  
   {question: `In which Indian state did the frothy yogurt-based beverage called lassi originate?`,
   A: 'Rajasthan',
   B:'punjab', 
   C:'Uttar-Pradesh',
   D:'goa',
   answer: 'b'},

   {question: `What is considered to be the favorite food of the Hindu god Ganesha?`,
   A: 'laddu',
   B:'modak', 
   C:'Rasgulla',
   D:'malpua',
   answer: 'b'},

   {question: `In the Hindu festival of Pongal, what is boiled with milk and offered to the gods?`,
   A: 'rice',
   B:'rye', 
   C:'barley',
   D:'pearl millet',
   answer: 'a'},

 ];
var score = 0;
var best = 5;

for(var i = 0;i<questions.length;i++){
  var n = i+1;
  console.log(chalk.inverse(n+'. '+questions[i].question));
  console.log('[a,b,c,d]');
  console.log(chalk.cyan('A: '+questions[i].A));
  console.log(chalk.cyan('B: '+questions[i].B));
  console.log(chalk.cyan('C: '+questions[i].C));
  console.log(chalk.cyan('D: '+questions[i].D));
  console.log('');
  var answer = readlineSync.question('Answer: ');

  if(answer.toLowerCase() === questions[i].answer.toLowerCase()){
    console.log(chalk.bgGreen('Correct'));
    score = score + 5;
  }else{
    console.log(chalk.bgRed('Incorrect'));
    score = score - 2;
  }
}
if(score > best){
    console.log(chalk.yellow('Congratulations ! This is the best score \n'))
    best = score
  }
console.log(chalk.red(username +' your final score is: '+ score));