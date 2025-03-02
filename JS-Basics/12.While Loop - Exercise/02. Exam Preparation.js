function examPreparation(input) {
    let index = 0;
    let poorGradesMaximum = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let gradesCount = 0;
    let gradesSum = 0;
    let poorGrades = 0;
    let isFailed = false;
    let lastProblem = "";

    while (command != "Enough") {
        lastProblem = command;

        let grade = Number(input[index]);
        index++;

        gradesCount++;
        gradesSum += grade;

        if (grade <= 4) {
            poorGrades++;
            if (poorGrades == poorGradesMaximum) {
                isFailed = true;
                break;
            }
        }
        command = input[index];
        index++;
    }
    if (isFailed) {
        console.log(`You need a break, ${poorGrades} poor grades.`);
    } else {
        console.log(`Average score: ${(gradesSum / gradesCount).toFixed(2)}`);
        console.log(`Number of problems: ${gradesCount}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}
examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])
