function walking(input) {
    let index = 0
    let command = input[index] // тук получава стъпки (число) или Going home - стринг
    let allStepsDuringTheDay = 0
    let stepsGoal = 10000;

    while (command !== "Going home") {
        let steps = Number(command) // защото ако нма going home, има стъпки и няма нужда да го четем от инпута
        allStepsDuringTheDay += steps
        if (allStepsDuringTheDay >= stepsGoal) {
            console.log(`Goal reached! Good job!`)
            console.log(`${allStepsDuringTheDay - stepsGoal} steps over the goal!`)
            break;
        }
        index++
        command = input[index]
    }
    if (command === "Going home") {
        index++
        let steps = Number(input[index]);

        allStepsDuringTheDay += steps;
        if (allStepsDuringTheDay >= stepsGoal) {
            console.log(`Goal reached! Good job!`)
            console.log(`${allStepsDuringTheDay - stepsGoal} steps over the goal!`)
        } else {
            console.log(`${stepsGoal - allStepsDuringTheDay} more steps to reach goal.`)
        }
    }
   
}
walking(["1500",
    "300",
    "250",
    "300",
    "200"])





