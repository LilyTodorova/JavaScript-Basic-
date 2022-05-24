function lunchBreak(input) {
    const seriesName = input[0];
    const episodeDuration = Number(input[1]);
    const lunchBreakDuration = Number(input[2]);
    let lunchTime = lunchBreakDuration * 0.125;
    let timeForRest = lunchBreakDuration * 0.25;
    let allTimeNeeded = episodeDuration + lunchTime + timeForRest;
    if (allTimeNeeded <= lunchBreakDuration) {
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(lunchBreakDuration - allTimeNeeded)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(allTimeNeeded - lunchBreakDuration)} more minutes.`)
    }
}
lunchBreak(["Teen Wolf","48","60"])

