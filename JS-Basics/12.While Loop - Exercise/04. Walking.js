function walking(input) {
    let index = 0;

    let command = input[index];
    index++;

    let sumSteps = 0;
    let inputL = 0;

    while (inputL < input.length) {
        inputL++;
        if (command != "Going home") {
            let steps = Number(command);
            sumSteps += steps;
        }

        command = input[index];
        index++;
    }

    if (sumSteps >= 10000) {
        console.log("Goal reached! Good job!");
        console.log(`${sumSteps - 10000} steps over the goal!`);
    } else {
        console.log(`${10000 - sumSteps} more steps to reach goal.`);
    }
}
walking(["1000",

    "1500",

    "2000",

    "6500"])