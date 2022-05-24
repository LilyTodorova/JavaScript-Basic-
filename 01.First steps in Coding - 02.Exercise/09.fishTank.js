function fishTank(input) {
    const lenghtCm = Number(input[0]);
    const widthCm = Number(input[1]);
    const heightCm = Number(input[2]);
    const percent = Number(input[3]);
    let fishTankVolume = (lenghtCm * widthCm * heightCm) /1000;
    let totalWater = fishTankVolume - ( (fishTankVolume * percent) / 100);
    console.log(totalWater);

}
fishTank(["85 ","75 ","47 ","17 "])