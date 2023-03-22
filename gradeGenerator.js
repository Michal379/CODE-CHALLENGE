//prompting the console
let score = prompt("enterScore")

//setting the condition of the scores
function calculatedGrade(score){
if (score >79){
  return  grades ='A';
}
if (score >=60 && score<=79){
   return grades='B';
}
else if (score>=49 && score<=59){
   return grades='C';
}
else if (score>=40 && score<=49){
   return grades='D';
}
else{
   return grades ='E';
}
}

//check the correct flow of the code above.
console.log (calculatedGrade(100))