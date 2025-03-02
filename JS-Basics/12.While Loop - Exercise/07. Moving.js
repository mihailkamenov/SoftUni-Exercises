function moving(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;

    let length = Number(input[index]);
    index++;

    let height = Number(input[index]);
    index++;

    let space = width * length * height;

    let command = input[index];
    index++;

    let isBreak = false;

    while (command != "Done") {
        let boxes = Number(command);
        space -= boxes;

        if (space <= 0) {
            isBreak = true;
            break;
        }

        command = input[index];
        index++;
    }

    if (isBreak) {
        console.log(`No more free space! You need ${Math.abs(space)} Cubic meters more.`);
    } else {
        console.log(`${space} Cubic meters left.`);
    }
}
moving(["10",

    "1",

    "2",

    "4",

    "6",

    "Done"])