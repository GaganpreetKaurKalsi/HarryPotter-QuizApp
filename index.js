readline = require('readline-sync');
const chalk = require('chalk');
user = readline.question(chalk.red.bold("Please enter your name : "));

console.log('\nHello ' + chalk.yellow.bold.italic(user)+"! Welcome to the most famous "+ chalk.hex('#ffffff').bgHex('#c20083').bold('HARRY POTTER QUIZ') + ". Let's see if you are as much of a potterhead as I am !!");
console.log("\nChoose the "+chalk.hex('#19c401').bold("correct option")+" to score. There is "+chalk.red.bold("no")+" such "+chalk.red.bold("negative marking")+" so no need to worry.\n"+chalk.hex('#fffc00').bold("Let's Begin :) \n"));

score = 0;
highscore = 15
function check(ques,ans){
  var userAns = readline.question((ques));
  if (userAns == -1){
    return -1;
  } 
  if(ans.includes(userAns.toLowerCase())){
    console.log("Your answer is "+chalk.hex('#10cf05').bold("correct! :)"));
    score++;
  }
  else{
    console.log("Your answer is "+chalk.hex('#ff0000').bold("wrong! :("));
    console.log(chalk.bgHex('#ff0000').hex('#ffffff')("The correct answer is : "+ ans));
  }
  console.log(chalk.hex('#ffe700').bold("Current score : " + score));
  console.log("-----------------------------------\n");
  return;
}

questionBank = [
  {
  question:
  chalk.bgHex('#f93a00').hex('#ffffff').bold(`Who was the real owner of Hagrid's bike?`)+`
  a) Hagrid
  b) Dumbledore
  c) Sirius
  d) James Potter\n`,
  answer:"c"
}
,
{
  question:
  chalk.bgHex('#e7aa00').hex('#ffffff').bold(`What was the animagus form of Rita Skeeter?`)+`
  a) Cockroach
  b) Cat
  c) Grasshopper
  d) Beetle\n`,
  answer : "d"
}
,
{
  question:
  chalk.bgHex('#0d9300').hex('#ffffff').bold(`Harry and Voldemort both were descendants of whom?`)+`
  a) Perkins
  b) Peverells
  c) Barns
  d) Riddles\n`,
  answer : "b"
}
,
{
  question:
  chalk.bgHex('#04a381').hex('#ffffff').bold(`The famous Gellert Grindlewald went to which school?`)+`
  a) Hogwarts
  b) Beauxbatons
  c) Durmstrang
  d) None of the above\n`,
  answer : "c"
}
,
{
  question : 
  chalk.bgHex('#0025a7').hex('#ffffff').bold(`What did Harry do of the Elder wand in the last after defeating Voldemort according to J.K. Rowling`)+`
  a) He broke the wand into 2 halves and threw them away.
  b) He kept the wand with himself as he was the current true owner of it.
  c) He kept the wand in Dumbledore's grave - It's true place.
  d) None of the above\n`,
  answer : "c"
}
,
{
  question : 
  chalk.bgHex('#4407d2').hex('#ffffff').bold(`"I open at the close" - What is it ?`)+`
  a) It is one of the password to enter the griffindor common room.
  b) It was written on the mirror of erised.
  c) It was written on the snitch
  d) It was the password to enter Dumbledore's office \n`,
  answer : "c"
}
,
{
  question : 
  chalk.bgHex('#7a00aa').hex('#ffffff').bold(`Status of which creature guarded Dumbledore's office?`)+`
  a) Phoenix
  b) Threstal
  c) Dragon
  d) Griffin \n`,
  answer : "d"
}
,
{
  question : 
  chalk.bgHex('#05a20d').hex('#ffffff').bold(`What was Harry Potter's Patronus?`)+`
  a) A stag
  b) A doe
  c) An Otter
  d) A horse\n`,
  answer : "a"
}
,
{
  question : 
  chalk.bgHex('#cb0023').hex('#ffffff').bold(`How do you punish your child who flew a magic car to school?`)+`
  a) Confiscate their broomstick
  b) Send them a Howler
  c) Put bars on their windows
  d) Ground them for life\n`,
  answer : "b"
}
,
{
  question:
  chalk.bgHex('#ffce02').hex('#000000').bold(`What was the nickname that Arthur Weasley gave Molly?`)+`
  a) Mollywobbles
  b) Mollywoobles
  c) Mollywolly
  d) Mollywikkies\n`,
  answer :"a"
}
,
{
  question : 
  chalk.bgHex('#5fff00').hex('#000000').bold(`What family possession did Great Aunt Muriel give Fleur on her wedding day?`)+`
  a) A rare diamond ring
  b) A glittering necklace
  c) A golden braclet
  d) A Goblin-made tiara\n`,
  answer : "d"
}
,
{
  question : 
  chalk.bgHex('#ff35ce').hex('#000000').bold(`The Slytherin common room is located in the ?`)+`
  a) Dungeons
  b) The North Tower
  c) The third floor
  d) Nobody knows\n`,
  answer : "a"
}
,
{
  question : 
  chalk.bgHex('#0adbd9').hex('#000000').bold(`What was the name of the dog Sirius transformed into?`)+`
  a) Snuffles
  b) Fluffuy
  c) Shaggy
  d) Snuggles\n`,
  answer : "a"
}
,
{
  question :
  chalk.bgHex('#7248ff').hex('#000000').bold(`What kind of animal was Voldemort drinking from in the Forbidden Forest in Philosopher’s Stone?`)+`
  a) A centaur
  b) A unicorn
  c) A Basilisk
  d) Acromantula\n`,
  answer : "b"
}
,
{
  question : 
  chalk.bgHex('#ffe700').hex('#000000').bold(`A person who has seen death can only see me. Who am I?`)+`
  a) Centaur
  b) Ghosts
  c) Thestrals
  d) Spiders \n`,
  answer : "c"
}
,
{
  question : 
  chalk.bgHex('#ef5aff').hex('#000000').bold(`What was the name of the woman the Bloody Baron loved and killed in a rage?`)+`
  a) Rowena Ravenclaw
  b) Helga Hufflepuff
  c) Helena Ravenclaw
  d) Moira Ravenclaw\n`,
  answer : "c"
}
,
{
  question : 
  chalk.bgHex('#8aff00').hex('#000000').bold(`How many sibilings did Ron have?`)+`
  a) 9
  b) 8
  c) 7
  d) 6\n`,
  answer : "d"
}
];


for (var i=0; i<questionBank.length; i++){
  if(check(questionBank[i].question, questionBank[i].answer)== -1){
    break;
  };
}


console.log(chalk.bgHex('#ecff00').hex('#ff0023').bold("Your total score is "+ score+"\n"));
if(score>=12){
  console.log(chalk.bgHex('#029609').bold("Top of the class\nYou’d be showing off your Prefect’s badge in no time with results this good."));
}
else if (score>=6){
  console.log(chalk.bgHex('#ff005b').bold("Mediocre to the last degre.\nKeep working to be as golden as a Galleon."));
}
else{
  console.log(chalk.bgHex('#f54a00').bold("Result: Dumble-poor\nWe think you’ve caught the Ron end of the Snitch. You’re supposed to choose the CORRECT answer."));
}

if(score>=highscore){
  console.log(chalk.bgHex('#cb0023').hex('#ffffff').bold.underline('\n\nCONGRATULATIONS! YOU BET THE HIGHSCORE :)'))
}
else{
  console.log(chalk.bgHex('#cb0023').hex('#ffffff').bold.underline('\n\nTry again to beat the highscore!!'))
}

