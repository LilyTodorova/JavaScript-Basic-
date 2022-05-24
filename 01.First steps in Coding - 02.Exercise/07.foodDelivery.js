function foodDelivery(input) {
    const menuChicken = Number(input[0]);
    const menuFish = Number(input[1]);
    const menuVeggie = Number(input[2]);
    const chickenMenuPrice = 10.35;
    const fishMenuPrice = 12.40;
    const veggieMenuPrice = 8.15;
    const deliveryPrice = 2.50
    let allMenuPrice = menuChicken * chickenMenuPrice + menuFish * fishMenuPrice + 
    menuVeggie * veggieMenuPrice;
    let dessertPrice = allMenuPrice * 0.2
    let totalPrice = allMenuPrice + dessertPrice + deliveryPrice;
    console.log(`${totalPrice} цена на поръчката`);
}

foodDelivery([2,4,3]);