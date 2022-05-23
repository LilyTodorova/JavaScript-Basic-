function petShop(input) {
    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);
    let priceAllDogFood = dogFood * 2.5;
    let priceAllCatFood = catFood * 4;
    console.log (priceAllCatFood + priceAllDogFood + " lv");
}
petShop([13, 9]);