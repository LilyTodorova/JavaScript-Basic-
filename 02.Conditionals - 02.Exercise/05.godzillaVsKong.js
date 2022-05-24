function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let clothesPriceForOne = Number(input[2]);
    let decor = budget*0.10
    let allClothesPrice = extras * clothesPriceForOne;

    if (extras>=150) {
        allClothesPrice = extras * clothesPriceForOne - allClothesPrice*0.1; 
    } else {
        allClothesPrice = extras * clothesPriceForOne;
    } if (allClothesPrice + decor > budget){
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${((allClothesPrice + decor)- budget).toFixed(2)} leva more.`)
    } else  {
        console.log(`Action!`)
        console.log(`Wingard starts filming with ${(budget-(allClothesPrice + decor)).toFixed(2)} leva left.`)
    }
  
    
}
godzillaVsKong(["9587.88","222","55.68"])

