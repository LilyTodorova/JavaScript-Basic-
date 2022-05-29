function oldLibrary(input) {
    let index = 0
    let bookNeeded = input[index]
    index++
    let bookChecked = input[index]

    while (bookChecked !== bookNeeded) {
        if (bookChecked === bookNeeded) {
            console.log(`You checked ${index-1} books and found it.`);
        }
        if (bookChecked === "No More Books") {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${index-1} books.`)
            break
        }
        index++;
        bookChecked = input[index]
        
    }
    if (bookChecked === bookNeeded) {
        console.log(`You checked ${index-1} books and found it.`);
    }

}
oldLibrary(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])



