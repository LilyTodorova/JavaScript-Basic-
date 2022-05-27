function cleverLily(input) {
  const ageLily = Number(input[0]);
  const washingMachinePrice = Number(input[1]);
  const pricePer1Toy = Number(input[2]);
  let totalSavedMoney = 0;
  let totalOddYears = 0;
  let totalToysPrice = 0;

  for (let i = 1; i <= ageLily; i++) {
    if (i % 2 === 0) {
      totalSavedMoney += (10 * i) / 2 - 1; // без делението на 2 се получава число, 
                                          // два пъти по-голямо / 5 * i без делене
    } else if (i % 2 !== 0) {
      totalOddYears += 1;
      totalToysPrice = pricePer1Toy * totalOddYears;
    }
  }
  let totalMoney = totalSavedMoney + totalToysPrice;

  if (totalMoney >= washingMachinePrice) {
    console.log(`Yes! ${(totalMoney - washingMachinePrice).toFixed(2)}`);
  } else {
    console.log(`No! ${(washingMachinePrice - totalMoney).toFixed(2)}`);
  }
}
cleverLily(["21", "1570.98", "3"]);
