function shopping(input) {
    const budget = Number(input[0]);
    const videoCards = Number(input[1]);
    const cPU = Number(input[2]);  // CPU - процесори
    const rAM = Number(input[3]);   // RAM памет
    let totalPrice = videoCards * 250 + cPU * ((videoCards *250) * 0.35) + 
    rAM * ((videoCards *250) * 0.1);

    if (videoCards > cPU) {
        finalPrice = totalPrice - (totalPrice * 0.15);
    } else {
        finalPrice = totalPrice
    } if (budget>= finalPrice){
    console.log(`You have ${(budget - finalPrice).toFixed(2)} leva left!`) 
    } else {
        console.log(`Not enough money! You need ${(finalPrice - budget).toFixed(2)} leva more!`)
    }
}
    shopping(["900","2","1","3"])
    

    



  

