function oneTo200(input) {
    const num1 = Number(input[0]);
    if (num1 < 100) {
        console.log("Less than 100");
    } else if (num1 >= 100 && num1 <= 200) {                
            console.log("Between 100 and 200");
    } else  {          
            console.log("Greater than 200");
        }
}
oneTo200(["250"]);
