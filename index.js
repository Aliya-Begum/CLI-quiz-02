
var readlineSync = require('readline-sync');
var userName = readlineSync.question("What's your name? ");
console.log("Welcome " +userName +" to the WEB DEVELOPMENT Quiz");
console.log(" Let's play ");

var score =0;

var ques_ans = [{
  question : "The web based on? ",
  answer: "HTML"},
{
question : "What does FTP stand for? ",
  answer : "File Transfer Protocol"},
  {
   question: "HTML tag for the largest heading? ",
   answer : "h1" },
{
question: "A CSS file can be applied to only one HTML file? ",
  answer: "false"}, 
{
question: "What is the tag for a line break? ",
answer: "br"  }
];

function play(question, answer ){
var userAns = readlineSync.question(question);
if(userAns.toUpperCase() === answer.toUpperCase ()){ 
console.log("YAY! you got it right");
score= score+1;
 }else{
console.log("Oops! you are wrong");
 }
}
for(var i=0; i<ques_ans.length; i++){
var currentQuestion = ques_ans[i];
  play(currentQuestion.question , currentQuestion.answer);
  console.log("-------");
}
console.log(score);
