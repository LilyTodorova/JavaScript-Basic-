function maxNumber(input) {
  let index = 0;
  let numberRead = input[index];
  
  let max = Number.MIN_SAFE_INTEGER // минималното безопасно цяло число в JavaScript (-(2^53 - 1)).

  while (numberRead !== "Stop") {
    let num = Number(numberRead); // инициализираме променлива, на която даваме 1та стойност от масива
    if (num>max) { // ако num(45)> -9007199254740991
        max = num // даваме нова стойност на max, която вече става 45
    }
    index++; //увеличаваме индекса с 1
    numberRead = input[index] // четем стринг от масива, който е под новия индект 1
  }
  console.log(max)
}
maxNumber(["45", "-20", "7", "99", "Stop"]);
