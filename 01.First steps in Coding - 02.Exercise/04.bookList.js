function bookList(input) {
    let pageCount = Number(input[0]);
    let pageHour = Number(input[1]);
    let days = Number(input[2]);
    let result = (pageCount / pageHour) / days;
    console.log(result);

}

bookList([1000, 15, 30])