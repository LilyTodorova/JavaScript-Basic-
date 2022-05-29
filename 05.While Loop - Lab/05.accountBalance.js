function accountBalance(input) {
  let index = 0; // от кой индекс почваме loop-а
  let total = 0; // сбор от вноските
  let moneyDeposit = input[index]; //първото число от масива

  while (moneyDeposit !== "NoMoreMoney") { // докато депозитът е различен по стойнос и тип о "..."  
    let money = Number(moneyDeposit); // инициализираме променлива, която превръщаме от стринг в число
    if (money < 0) { // ако тази променлива е < 0
      console.log(`Invalid operation!`);
      break;
    }
    total += money; // ако е >0 събираве числото с тотала
    console.log(`Increase: ${money.toFixed(2)}`); // принтираме числото, което сме получили от масива
    index++; // увеличаваме индекса с едно - от 0 => 1
    moneyDeposit = input[index]; // прочитаме числото на индекс 1 и позване loop-a отново
  }
  console.log(`Total: ${total.toFixed(2)}`);
}
accountBalance(["120", "45.55", "-150"]);
