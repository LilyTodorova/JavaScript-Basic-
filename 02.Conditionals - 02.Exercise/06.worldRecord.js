function worldRecord(input){
    const record = Number(input[0]);
    const distance = Number(input[1]);
    const time = Number(input[2]);
    //distance - разстоянието в метри; time - времето в секунди
    let timeToFinish = distance * time; 
    let resistancePlusTime = Math.floor(distance/15)*12.5;
    // resistancePlusTime - забавяне с 12.5 сек. на всеки 15 метра
    let finalTime = resistancePlusTime + timeToFinish

    if (finalTime < record){
        console.log(`Yes, he succeeded! The new world record is ${(finalTime).toFixed(2)} seconds.`)
    } else   {
        console.log(`No, he failed! He was ${(finalTime-record).toFixed(2)} seconds slower.`)
    }

}
worldRecord(["55555.67",
"3017",
"5.03"])

//(["10464","1500","20"])
//(["55555.67","3017","5.03"])

