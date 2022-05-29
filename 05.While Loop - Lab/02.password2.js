function password(input) {
  let index = 0;
  let username = input[index]; index++;
  let password = input[index]; index++;
  let passwordForEntry = input[index];

  while (passwordForEntry !== password) {
      index++
      passwordForEntry = input[index];    
  }
  console.log(`Welcome ${username}!`);
}
password(["Nakov", "1234", "Pass", "1324", "1234"]);
