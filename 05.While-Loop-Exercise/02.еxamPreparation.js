function examPreparation(input) {
    let gradesFourAndUnder = Number(input.shift(0))
    let goodGradesCounter = 0 //брой добри оценки
    let badGradesCounter = 0 // брой лоши оценки
    let sumOfGrads = 0 // сбор от всички оценки 
    let lastProblem = "" // име на последната задача
    let index = 0
    let prombelName = input[index]
        index++
    let grade = Number(input[index])

    while (badGradesCounter < gradesFourAndUnder) {
        sumOfGrads += grade
        if (grade > 4) {
            goodGradesCounter += 1
        } else {
            badGradesCounter +=1
        }
        lastProblem = prombelName
        index++
        prombelName = input[index]
        index++
        grade = Number(input[index])
        let averageScore = sumOfGrads / (goodGradesCounter + badGradesCounter)
        if (prombelName === "Enough") {
            console.log(`Average score: ${averageScore.toFixed(2)}`)
            console.log(`Number of problems: ${goodGradesCounter + badGradesCounter}`)
            console.log(`Last problem: ${lastProblem}`)
            break;
        }
    }
    if (badGradesCounter === gradesFourAndUnder) {
        console.log(`You need a break, ${badGradesCounter} poor grades.`)
    }
}
examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])

