function smallShop(input) {
    let price = 0
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    if (city == "Sofia") {
        if (product == "coffee") {
            price = quantity * 0.50;
        } else if (product =="water") {
            price = quantity * 0.80;
        } else if (product == "beer") {
            price = quantity * 1.20;
        } else if (product =="sweets") {
            price = quantity * 1.45;
        } else if (product == "peanuts") {
            price = quantity * 1.6
        }
    } else if (city =="Plovdiv") {
        if (product =="coffee") {
            price = quantity * 0.4;
        } else if (product =="water") {
            price = quantity * 0.70;
        } else if (product =="beer") {
            price = quantity * 1.15;
        } else if (product == "sweets") {
            price = quantity * 1.30
        } else if (product == "peanuts") {
            price = quantity * 1.5
        }
    } else {
        if (product =="coffee") {
            price = quantity * 0.45;
        } else if (product =="water") {
            price = quantity * 0.7;
        } else if (product == "beer") {
            price = quantity * 1.10;
        } else if (product == "sweets") {
            price = quantity * 1.35;
        } else if (product == "peanuts") {
            price = quantity * 1.55
        }
    }
    console.log(price); //след всичкото писане взех, че забравих console.log
    
}
smallShop(["fanta",
"Plovdiv",
"1"])


