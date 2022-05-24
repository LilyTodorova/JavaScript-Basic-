function ifExcellent(input) {
    const grade = Number(input[0]);
    if (grade >= 5.5) {                // между брекетите - скоуп на if
        console.log("Excellent!");
    } else {
        console.log("You are a looser!")
    }
}
ifExcellent([5.48]);
