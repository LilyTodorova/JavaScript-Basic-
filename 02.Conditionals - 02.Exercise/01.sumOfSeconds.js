function secondsSum(input) {
    const timeFirst = Number(input[0])
    const timeSecond = Number(input[1]);
    const timeThird = Number(input[2]);
    let totalTime = timeFirst + timeSecond + timeThird;
    let minutes = Math.floor(totalTime/60);
    let seconds = (totalTime%60);
    
    if (seconds <10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
    
}
secondsSum(["22", "7", "34"])

//Създайте си две нови променливи. В първата изчислете, 
//колко минути е сбора от секунди, като разделите сбора на 60. 
//Във втората променлива изчислете секундите с помощта на 
//деление с остатък (%). 
//Използвайте деление с остатък (%), за да вземете остатъка при деление с 60, 
//което са останалите секунди. 
//Например имате общ сбор от 134 секунди (2 минути и 14 секунди) 
//след целочисленото деление (/) на 60 ще получим 2, 
//а след  делението с остатък (%) ще получим оставащите секунди(14).
