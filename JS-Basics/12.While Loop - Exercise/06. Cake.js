function cake(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;

    let length = Number(input[index]);
    index++;

    let pieces = width * length;

    let command = input[index];
    index++;

    let isTrue = false;

    while (command != "STOP") {
        let getPieces = Number(command);
        pieces -= getPieces;

        if (pieces <= 0) {
            isTrue = true;
            break;
        }

        command = input[index];
        index++;
    }
    if (isTrue) {
        console.log(`No more cake left! You need ${Math.abs(pieces)} pieces more.`);
    } else {
        console.log(`${pieces} pieces are left.`);
    }
}
cake(["10",

    "2",

    "2",

    "4",

    "6",

    "STOP"])