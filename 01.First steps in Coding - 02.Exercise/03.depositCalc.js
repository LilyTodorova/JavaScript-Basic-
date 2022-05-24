function depositCalc(input) {
let deposit = Number(input[0]);
let months = Number(input[1]);
let percent = Number(input[2]/100);
let sum = ((deposit*percent)/12) * months + deposit;
console.log(sum);
}

depositCalc([100, 8, 5.7]);