function operationsBetweenNumbers(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);
  let operator = input[2];
  let result = Number("");
  let evenOrOdd;

  if (operator == "+") {
    result = n1 + n2;
  } else if (operator == "-") {
    result = n1 - n2;
  } else if (operator == "*") {
    result = n1 * n2;
  } else if (operator == "%") {
    result = n1 % n2;
  } else {
    result = n1 / n2;
  }
  if (operator == "+" || operator == "-" || operator == "*") {
    if (result % 2 === 0) {
      evenOrOdd = "even";
    } else {
      evenOrOdd = "odd";
    }
  }

  if (operator == "+" || operator == "-" || operator == "*") {
    console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`);
  }
  if (operator == "/") {
    if (n2 == "0") {
      console.log(`Cannot divide ${n1} by zero`);
    } else {
      console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
    }
  }
  if (operator == "%") {
    if (n2 == "0") {
      console.log(`Cannot divide ${n1} by zero`);
    } else {
      console.log(`${n1} % ${n2} = ${result}`);
    }
  }
}
operationsBetweenNumbers(["123", "0", "/"]); // Shift + Alt + F
