function onTimeForTheExam(input) {
  const hourOfExam = Number(input[0]);
  const minutesOfExam = Number(input[1]);
  const hourOfArrival = Number(input[2]);
  const minutesOfArrival = Number(input[3]);
  let late = "Late";
  let early = "Early";
  let onTime = "On time";

  let examTime = hourOfExam * 60 + minutesOfExam;
  let arrivalTime = hourOfArrival * 60 + minutesOfArrival;
  let minutesDifference = arrivalTime - examTime; 
/* minutesDifference е отрицателно число, ако е преди началото на изпита (ако е early)
и положително, ако е след началото (ако е late).
*/
  let studentArrival = "";
  if (minutesDifference < -30) {
    studentArrival = early;
  } else if (minutesDifference >= -30 && minutesDifference <= 0) {
    studentArrival = onTime;
  } else if (minutesDifference > 0) {
    studentArrival = late;
  }
  console.log(studentArrival);

  let newHour = Number("");
  let newMinutes = Number("");

  if (studentArrival === early) {
    minutesDifference = Math.abs(minutesDifference);
    if (minutesDifference >= 60) {
      newHour = Math.abs(Math.floor(minutesDifference / 60));
      newMinutes = Math.abs(minutesDifference % 60);
      if (newMinutes < 10) {
        console.log(`${newHour}:0${newMinutes} hours before the start`);
      } else {
        console.log(`${newHour}:${newMinutes} hours before the start`);
      }
    } else {
      newMinutes = minutesDifference;
      console.log(`${Math.abs(newMinutes)} minutes before the start`);
    }
  } else if (studentArrival === late) {
    minutesDifference = Math.abs(minutesDifference);
    if (minutesDifference >= 60) {
      newHour = Math.abs(Math.floor(minutesDifference / 60));
      newMinutes = Math.abs(minutesDifference % 60);
      if (newMinutes < 10) {
        console.log(`${newHour}:0${newMinutes} hours after the start`);
      } else {
        console.log(`${newHour}:${newMinutes} hours after the start`);
      }
    } else {
      newMinutes = minutesDifference;
      console.log(`${newMinutes} minutes after the start`);
    }
  } else {
    minutesDifference = Math.abs(minutesDifference);
    if (minutesDifference < 0 && minutesDifference >= 30);
    newMinutes = minutesDifference;
    console.log(`${newMinutes} minutes before the start`);
  }
}
onTimeForTheExam(["11", "30", "12", "38"]);
