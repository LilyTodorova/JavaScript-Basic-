function trekkingMania(input) {
  const numberOfGroups = Number(input.shift(0));

  let peopleInGropMusala = 0;
  let peopleInGropMonblan = 0;
  let peopleInGropKalimanjaro = 0;
  let peopleInGropK2 = 0;
  let peopleInGropEverest = 0;


  for (let i = 0; i < numberOfGroups; i++) {
    let number = Number(input[i]);
    if (number <= 5) {
      peopleInGropMusala += number; 
    } else if (number >= 6 && number <= 12) {
      peopleInGropMonblan += number;   
    } else if (number >= 13 && number <= 25) {
        peopleInGropKalimanjaro += number;
    } else if (number >= 26 && number <= 40) {
        peopleInGropK2 += number;
    } else {
        peopleInGropEverest += number;
    }
  }
  let allPeople = peopleInGropMusala+peopleInGropMonblan+peopleInGropKalimanjaro+
  peopleInGropK2+peopleInGropEverest
  let percentMusala = (peopleInGropMusala * 100) / allPeople;
  let percentMonblan = (peopleInGropMonblan * 100) / allPeople;
  let percentKalimanjaro = (peopleInGropKalimanjaro * 100) / allPeople;
  let percentK2 = (peopleInGropK2 * 100) / allPeople;
  let percentEverest = (peopleInGropEverest * 100) / allPeople;

  console.log(`${percentMusala.toFixed(2)}%`);
  console.log(`${percentMonblan.toFixed(2)}%`);
  console.log(`${percentKalimanjaro.toFixed(2)}%`);
  console.log(`${percentK2.toFixed(2)}%`);
  console.log(`${percentEverest.toFixed(2)}%`)

}
trekkingMania(["10","10","5","1","100","12","26","17","37","40","78"]);
