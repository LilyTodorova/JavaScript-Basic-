function oscars(input) {
    let actorName = input.shift(0);
    let pointsFromTheAcademy = Number(input.shift(1));
    let numberOfEvaluators = Number(input.shift(2))
    let sumOfPoints = 0

  let isNominee = false // булеан флаг
    for (let i = 0; i < numberOfEvaluators; i++) {
        let nameOfEvaluator = input.shift(i);  
        let pointsOfEvaluator = Number(input.shift(i)) 
        sumOfPoints += nameOfEvaluator.length * pointsOfEvaluator/ 2
        if (sumOfPoints + pointsFromTheAcademy > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${(sumOfPoints + pointsFromTheAcademy).toFixed(1)}!`);
            isNominee = true // булеан флаг
            break;
        }   
    }
    if (!isNominee) { // булеан флаг isNominee = false
        console.log(`Sorry, ${actorName} you need ${(1250.5 - (sumOfPoints + pointsFromTheAcademy)).toFixed(1)} more!`)
    }
}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])