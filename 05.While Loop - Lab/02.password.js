function password(input) {
    let username = input[0]; // име на портебителя
    let password = input[1]; // парола
    let data = input[2]; // въведената от потребителя парола
    let index = 3 // индексът в масива, от който започваме да разглеждаме различните
                  // пароли, въведени от потребителя

    while(data !== password) { // докато въведената парола е различна от реалната
        data = input[index]    // четем нова парола 
        index++    
        } 
        console.log(`Welcome ${username}!`)
        

}
password(["Nakov", "1234", "Pass", "Pesho", "1234"]);
