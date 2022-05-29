function accountBalance(input) {
  let index = 0;
  let moneyDeposit = Number(input[index]);
  let sum = 0;
  while (moneyDeposit >= 0) {
    console.log(`Increase: ${moneyDeposit.toFixed(2)}`);
    sum += moneyDeposit;
    index++;
    moneyDeposit = Number(input[index]);
  }
  if (moneyDeposit < 0) {
    console.log(`Invalid operation!`);
  }
  console.log(`Total: ${sum.toFixed(2)}`);
}
accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
