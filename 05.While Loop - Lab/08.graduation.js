function graduation(input) {
  let index = 0;
  let studentName = input[index];
  index++;
  let yearGrades = Number(input[index]);
  let years = 12;
  let sumOfGrades = 0;

  while (yearGrades >= 4) {
    sumOfGrades += yearGrades;
    index++;
    yearGrades = Number(input[index]);
  }
  if (yearGrades < 4) {
    console.log(`${studentName} has been excluded at ${index} grade`);
  } else {
  let averageGrades = sumOfGrades / years;
  console.log(
    `${studentName} graduated. Average grade: ${averageGrades.toFixed(2)}`);
  }
}
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
