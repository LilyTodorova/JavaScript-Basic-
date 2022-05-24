function speedInfo(input) {
    const currentSpeed = Number(input[0]);                      // при истинност на едно условие, 
    if (currentSpeed <= 10) {                                   //не се преминава към проверка на следващите
        console.log("slow");                                     
    } else if (currentSpeed > 10 && currentSpeed <= 50) {          // започваме отдолу нагоре 10 - 50 -100    
            console.log("average");
      } else if (currentSpeed > 50 && currentSpeed <= 150) {
            console.log("fast");
        } else if (currentSpeed > 150 && currentSpeed <= 1000) {
            console.log("ultra fast");
          } else {                                       //if (currentSpeed > 1000) {
        console.log("extremely fast");          //console.log("extremely fast");                                         
    }    
}
speedInfo([25888])