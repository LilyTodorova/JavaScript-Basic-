function cake(input) {
  let cakeWidth = Number(input.shift(0));
  let cakeHight = Number(input.shift(1));
  let allCakePieces = cakeHight * cakeWidth;
  let index = 0;
  let piecesTaken = input[index];

  while (piecesTaken !== "STOP") {
    let pieceCount = Number(piecesTaken);
    allCakePieces -= pieceCount;
    if (allCakePieces <= 0) {
      let diff = Math.abs(allCakePieces);
      console.log(`No more cake left! You need ${diff} pieces more.`);
      break;
    }
    index++;
    piecesTaken = input[index];
  }

  if (piecesTaken === "STOP") {
    if (allCakePieces >= 0) {
      console.log(`${allCakePieces} pieces are left.`);
    }
  }
}
cake(["10", "10", "20", "20", "20", "20", "21"]);
