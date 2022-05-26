function fruitShop(input) {
    const fruit = input[0];
    const dayOfWeek = input[1];
    const quantity = Number(input[2]);
    let price = Number(""); // undefined

    if (dayOfWeek == "Monday"||dayOfWeek == "Tuesday"||dayOfWeek =="Wednesday"||
    dayOfWeek =="Thursday"||dayOfWeek == "Friday" ) {
        if (fruit == "banana") {
            price = quantity * 2.50;
            console.log(price.toFixed(2));
        } else if (fruit == "apple") {
            price = quantity * 1.20;
            console.log(price.toFixed(2));
        } else if (fruit == "orange") {
            price = quantity * 0.85;
            console.log(price.toFixed(2));
        } else if (fruit == "grapefruit") {
            price = quantity * 1.45;
            console.log(price.toFixed(2));
        } else if (fruit == "kiwi") {
            price = quantity * 2.70;
            console.log(price.toFixed(2));
        } else if (fruit == "pineapple") {
            price = quantity * 5.50;
            console.log(price.toFixed(2));
        } else if (fruit == "grapes") {
            price = quantity * 3.85;
            console.log(price.toFixed(2));
        } else {
            console.log("error");
        }
    } else if (dayOfWeek == "Saturday" || dayOfWeek =="Sunday") {
        if (fruit == "banana") {
            price = quantity * 2.70;
            console.log(price.toFixed(2));
        } else if (fruit == "apple") {
            price = quantity * 1.25;
            console.log(price.toFixed(2));
        } else if (fruit == "orange") {
            price = quantity * 0.90;
            console.log(price.toFixed(2));
        } else if (fruit == "grapefruit") {
            price = quantity * 1.60;
            console.log(price.toFixed(2));
        } else if (fruit == "kiwi") {
            price = quantity * 3.00;
            console.log(price.toFixed(2));
        } else if (fruit == "pineapple") {
            price = quantity * 5.60;
            console.log(price.toFixed(2));
        } else if (fruit == "grapes") {
            price = quantity * 4.20
            console.log(price.toFixed(2));
        } else {
            console.log("error");
        }
    } else {
        console.log("error")
    }
    //console.log(price.toFixed(2));
}
fruitShop(["apple","Workday","2"])


//(["beer","Friday","3"])








//(banana / apple / orange / grapefruit / kiwi / pineapple / grapes), 
//2.70     1.25	    0.90	   1.60	      3.00	  5.60	      4.20