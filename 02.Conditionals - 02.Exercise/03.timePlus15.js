function timePlus15(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);
    let newMinutes = minutes + 15
    if (newMinutes>59) {
       hour += 1;
       newMinutes -= 60;
    } if (hour > 23) {
        hour-=24;        
    } if (newMinutes < 10) {
        console.log(`${hour}:0${newMinutes}`)
    } else {
        console.log(`${hour}:${newMinutes}`);
    }  
}
timePlus15(["0", "01"])

