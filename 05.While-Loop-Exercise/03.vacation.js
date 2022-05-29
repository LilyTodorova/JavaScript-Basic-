function vacation(input) {
    let moneyNeeded = Number(input.shift(0));
    let currentMoney = Number(input.shift(0));
    let index = 0
    let spendOrSave = input[index];
    index++
    let moneySpendOrSaved = Number(input[index])
    let daysSpend = 0
    let allDays = 0

    while (currentMoney < moneyNeeded) {
        allDays +=1
        if (spendOrSave === "spend") {
            currentMoney -= moneySpendOrSaved
            daysSpend += 1     
        } else  {
            currentMoney += moneySpendOrSaved
            daysSpend = 0   // ако спестява, дните, които харчи се нулират (търсят се последователни)
        }
        if (currentMoney < 0) {
            currentMoney = 0
        }
        if (daysSpend >= 5) {
            console.log(`You can't save the money.`)
            console.log(`${allDays}`)
            break;
        }
        if (currentMoney >= moneyNeeded) {
            console.log(`You saved the money for ${allDays} days.`)
        }    
        index++
        spendOrSave = input[index]
        index++
        moneySpendOrSaved = Number(input[index])
    }
}

vacation(["250","150","spend","50","spend","50","save","100","save","100"])


