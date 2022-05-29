function readText(input) {
  let index = 0;
  let word = input[index];
  while (word !== "Stop") {
    console.log(word);   // печатаме думата
    index++;             // повишаваме индекса
    word = input[index]; // думата вече е равна на новия индекс
  }
}
readText(["Sofia","Berlin","Moscow","Athens","Madrid","London","Paris","Stop","AfterStop"]);
