function salary(input) {
    let openTabs = Number(input.shift(0)); // с input.shift() премахваме елемента от масива
    let salary = Number(input.shift(1));  // тогава вече могем for-loop да си го направим нормално
    let facebookFine = 150;
    let instagramFine = 100;
    let redditFine = 50;
  
    for (let i = 0; i <= openTabs; i++) {  
      let differentTab = input[i];           
      if (differentTab == "Facebook") {
        salary -= facebookFine;
        if (salary <= 0) {
          console.log(`You have lost your salary.`);
          break;    // слага се break, защото в условието се иска програмата да спира
        }           // ако заплатата стане 0 или по-малко
      } else if (differentTab == "Instagram") {
        salary -= instagramFine;
        if (salary <= 0) {
          console.log(`You have lost your salary.`);
          break;
        }
      } else if (differentTab == "Reddit") {
        salary -= redditFine;
        if (salary <= 0) {
          console.log(`You have lost your salary.`);
          break;
        }
      }
    }
    if (salary > 0) {
      console.log(salary);
    }
  }
  
  salary(["3", "500", "Stackoverflow.com", "softuni.bg", "Facebook"]);