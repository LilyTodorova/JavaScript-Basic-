function petShop(input){
    let dog_food = 2.50;
    let cat_food = 4;
    let number_of_dog_food = Number(input[0]);
    let number_of_cat_food = Number(input[1]);
    let final_sum = (number_of_cat_food * cat_food) + (number_of_dog_food * dog_food);
 
    console.log(`${final_sum} lv.`)
}
petShop([13, 9]);