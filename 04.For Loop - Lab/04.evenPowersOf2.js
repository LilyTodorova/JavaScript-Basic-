function evenPowersOf2 (input) {
    let n = Number(input[0]);
    let num = 1;
    for (let i = 0; i <= n; i += 2) { 
      console.log(num);
      num = num * 2 * 2;
    }

}
evenPowersOf2(["6"])
// тук пишем степенуването i - началната степен 0 
//0 -- 2 -- 4 -- 6 (n = 6) - четни степени
//i = 0 ; i < 6 => num = 1 - принтира 1
//отива в сметката -- num = 1 * 2 * 2 => num = 4
//втори loop
//i = 2
