//prompting speed entry
let speed =prompt("enterSpeed")
function calculatedPoints(speed){
    const speedLimit=70;    
    const Points=5;
    const kmperPoints=5;
demeritPoints=(speed-speedLimit)/ kmperPoints;

//setting the condition of the speed
if (speed<=70){
return "OK";
} else if (speed>70) {
    let Pointsfound = ((speed-70)/5)
    console.log(Pointsfound);
    if (Pointsfound>=12)
    return "License suspended"
}
}
//debugging the code
console.log (calculatedPoints(200))
