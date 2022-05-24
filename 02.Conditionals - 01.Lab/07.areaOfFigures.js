function areaOfFigures(input) {
    let figureType = input[0];
    let area = 0; // "" - присвояваме стойност          // area = лице, но защо е 0, не мога да разбера
    if (figureType === "square") {                      // когато искаме да е число, но не знаем какво е
        let squareSide = Number(input[1]);
        area = squareSide * squareSide;    
    } 
    else if (figureType === "rectangle") {
        let rectangSideA = Number(input[1]);
        let rectangSideB = Number(input[2]);
        area = rectangSideA * rectangSideB;
    }   
    else if (figureType === "circle") {
        let radius = Number(input[1]);
        area = (radius * radius) * Math.PI;
    }      
    if (figureType === "triangle") {
        let triangleSideA = Number(input[1]);
        let triangleSideB = Number(input[2]);
        area = (triangleSideA * triangleSideB) / 2;  
    }  
    console.log(area.toFixed(3));  
}
   areaOfFigures(["rectangle","7","2.5"])
   
    
    
    



          
