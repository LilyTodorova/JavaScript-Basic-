function sumNumbers(input) {
  let number = Number(input[0]);
  let sum = 0;
  let index = 1;
  let currentNumber = Number(input[index])

  while (sum !== number && sum < number) {
    sum += currentNumber;
    index++;
    currentNumber = Number(input[index])
    
  }
  console.log(sum);
}
sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);
