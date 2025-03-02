function oldBooks(input) {
    let index = 0;
    let searchedBook = input[index];
    index++;

    let command = input[index];
    index++;

    let booksSearched = 0;
    let isFound = false;

    while (command != "No More Books") {
        if (command == searchedBook) {
            isFound = true;
            console.log(`You checked ${booksSearched} books and found it.`);
            break;
        }
        booksSearched++;

        command = input[index];
        index++;
    }
    if (isFound == false) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${booksSearched} books.`);
    }
}
oldBooks(["Troy",

    "Stronger",

    "Life Style",

    "Troy"])