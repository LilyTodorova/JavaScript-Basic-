function walking(input) {
    let index = 0
    let steps = input[index]
    let allStepsDuringTheDay = 0
    let stepsGoal = 10000;

    while (steps !== "Going home") {
        currentSteps = Number(steps)
        allStepsDuringTheDay += currentSteps
        if (allStepsDuringTheDay >= stepsGoal) {
            console.log(`Goal reached! Good job!`)
            console.log(`${allStepsDuringTheDay - stepsGoal} steps over the goal!`)
            break;
        }
        index++
        steps = input[index]
    }

    if (steps === "Going home") {
        index++
        let currentSteps = Number(input[index])
       
        allStepsDuringTheDay += currentSteps;
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
"2500",
"3000",
"Going home",
"200"])
