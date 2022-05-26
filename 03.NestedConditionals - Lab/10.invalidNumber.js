function invalidNumber(input) {
    let number = Number(input[0]);

  
    if ( number >= 100 && number <= 200 || number === 0 ) { // знакът - || - поне едно от двете условия
        console.log()                                       // или да е между 100 и 200 или (||) да е 0
    } else {
        console.log("invalid")
    }
    /* 
    Пешо
    Гошо
    Стоян
    */
} 

invalidNumber(["220"])