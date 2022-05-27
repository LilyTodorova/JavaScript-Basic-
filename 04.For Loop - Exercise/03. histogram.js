function histogram(input) {
  let numberCount = Number(input[0]);
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;
  persentp1 = 0;
  persentp2 = 0;
  persentp3 = 0;
  persentp4 = 0;
  persentp5 = 0;

  for (let i = 1; i <= numberCount; i++) {
    let number = input[i];
    if (number < 200) {
      p1 += 1;
      persentp1 = (p1 * 100) / numberCount;
    } else if (number >= 200 && number <= 399) {
      p2 += 1;
      persentp2 = (p2 * 100) / numberCount;
    } else if ((number >= 400) & (number <= 599)) {
      p3 += 1;
      persentp3 = (p3 * 100) / numberCount;
    } else if (number >= 600 && number <= 799) {
      p4 += 1;
      persentp4 = (p4 * 100) / numberCount;
    } else {
      p5 += 1;
      persentp5 = (p5 * 100) / numberCount;
    }
  }

  console.log(`${persentp1.toFixed(2)}%`);
  console.log(`${persentp2.toFixed(2)}%`);
  console.log(`${persentp3.toFixed(2)}%`);
  console.log(`${persentp4.toFixed(2)}%`);
  console.log(`${persentp5.toFixed(2)}%`);
}
histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);
