function multiplicationTable(input) {
    let num = Number(input[0]);

    for(let i = 1; i<= 10; i++) {
        let result = i * num;
        console.log(`${i} * ${num} = ${result}`)
       // сама се сетих как да стане, гордея се със себе си
    }
}
multiplicationTable(["5"])