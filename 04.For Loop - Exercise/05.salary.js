function salary(input) {
  let openTabs = Number(input[0]);
  let salary = Number(input[1]);
  let facebookFine = 150;
  let instagramFine = 100;
  let redditFine = 50;

  for (let i = 0; i <= openTabs+1; i++) {  // не хваща последния елемент от масива
    let differentTab = input[i];           // затова слагаме (let i = 1; i <= 11)
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
