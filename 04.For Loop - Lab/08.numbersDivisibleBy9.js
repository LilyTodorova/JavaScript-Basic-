function numbersDivisibleBy9(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let sum = 0;
    
    for (let i = num1; i < num2; i++) {
        if (i%9 === 0) {  // i - в случая числото, защото минава през всяко, взима, тези
            sum += i;     // които се делят на девет и под тях си събира на всяко превъртане  
        }
    }
    console.log(`The sum: ${sum}`)

    for (let i = num1; i < num2; i++) {
        if (i%9 === 0) {
           console.log(i)
        }
    }

}
numbersDivisibleBy9(["100", "200"])