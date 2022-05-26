function cinema(input) {
 const movieScreeningType = input[0];
 const rowsCount = Number(input[1]);
 const columnsCount = Number(input[2]);
 const premierePriceTicket = 12.00;
 const normalPriceTicket = 7.50;
 const discountPriceTicket = 5.00
 let totalIncome = Number("");
 let totalSeats = rowsCount * columnsCount
 
 
 if (movieScreeningType == "Premiere") {
     totalIncome = totalSeats * premierePriceTicket;
     //console.log(totalIncome.toFixed(2));
 } else if (movieScreeningType == "Normal") {
     totalIncome = totalSeats * normalPriceTicket;
     //console.loj(totalIncome.toFixed(2));
 } else {
     totalIncome = totalSeats * discountPriceTicket;    
 }
 console.log(`${totalIncome.toFixed(2)} leva`)
}
cinema(["Premiere","10","12"])
