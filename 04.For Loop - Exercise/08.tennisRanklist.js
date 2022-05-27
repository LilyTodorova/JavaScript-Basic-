function tennisRanklist(input) {
  const countOfTournaments = Number(input.shift(0));
  const initialPoints = Number(input.shift(1));
  let pointsW = 2000; // points for winning
  let pointsF = 1200; // points for finalist
  let pointsSF = 720; // points fot semi-finalist
  let totalPointsW = 0;
  let totalPointsF = 0;
  let totalPointsSF = 0;
  let allWTournaments = 0;

  for (let i = 0; i < countOfTournaments; i++) {
    let stageOfTournament = input[i];
    if (stageOfTournament === "W") {
      totalPointsW += pointsW;
      allWTournaments += 1;
    } else if (stageOfTournament === "F") {
      totalPointsF += pointsF;
    } else {
      totalPointsSF += pointsSF;
    }
  }
  let finalPoints = totalPointsW + totalPointsF + totalPointsSF + initialPoints;
  let averagePoints =
    (totalPointsW + totalPointsF + totalPointsSF) / countOfTournaments;
  let percentWinning = (allWTournaments * 100) / countOfTournaments;

  console.log(`Final points: ${finalPoints}`);
  console.log(`Average points: ${Math.floor(averagePoints)}`);
  console.log(`${percentWinning.toFixed(2)}%`);
}
tennisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);
