function minNumber(input) {
    let numberRead = Number(input[0])
    let index = 0;
    let min = Number.MAX_SAFE_INTEGER //9,007,199,254,740,991 or ~9 quadrillion

    while (numberRead !== "Stop") {
        let num = Number(numberRead);
        if (num < min) {
            min = num
        }
        index++
        numberRead = input[index]
    }
    console.log(min)
}
minNumber(["45", "-20", "7", "99", "Stop"]);
