function personalTitles(input) {
    const age = Number(input[0]);
    const gender = input[1];

    if (gender === "f") {         //ако първото условие е вярно, само тогава се изпълнява
        if (age>=16) {            //вложената проверка
            console.log("Ms.")
        } else {
            console.log("Miss")
        }
    }
    else  {   //(gender === "m")
        if (age >= 16) {
            console.log("Mr.")
        } else {
            console.log("Master")
        }
    }
}
personalTitles(["13","m"])

