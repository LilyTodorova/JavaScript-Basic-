function oldLibrary(input) {
    let index = 0
    let bookNeeded = input[index]
    index++
    let bookChecked = input[index]

    while (bookChecked !== "No More Books") {
        if (bookChecked === bookNeeded) {
            console.log(`You checked ${index-1} books and found it.`);   
        }
        index++;
        bookChecked = input[index]  
    }
    if (bookChecked === "No More Books") {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${index-1} books.`)   
    }

}
oldLibrary(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])
