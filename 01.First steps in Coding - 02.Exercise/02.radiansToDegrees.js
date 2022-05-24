function radToDeg(input) {
    const radians = Number(input[0])
    let degrees = (radians * 180)/Math.PI;
    console.log(degrees.toFixed(2));

}

radToDeg([3.1416]);