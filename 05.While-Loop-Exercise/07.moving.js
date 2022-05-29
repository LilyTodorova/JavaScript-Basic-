function moving(input) {
  let width = Number(input.shift(0));
  let length = Number(input.shift(1));
  let height = Number(input.shift(2));
  let apartmentVolume = width * length * height;
  let index = 0;
  let command = input[index];

  while (command !== "Done") {
    let boxes = Number(command);
    apartmentVolume -= boxes;
    if (apartmentVolume <= 0) {
      let diff = Math.abs(apartmentVolume);
      console.log(`No more free space! You need ${diff} Cubic meters more.`);
      break;
    }
    index++;
    command = input[index];
  }

  if (command === "Done") {
    if (apartmentVolume > 0) {
      console.log(`${apartmentVolume} Cubic meters left.`);
    }
  }
}
moving(["10", "1", "2", "4", "6", "Done"]);
