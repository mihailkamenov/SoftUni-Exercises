function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;

    let grade = Number(input[index]);
    index++;

    let sumGrades = 0;
    let inClass = 1;
    let badGrades = 0;
    let hasBeenExcluded = false;

    while (inClass <= 12) {
        if (grade < 4) {
            badGrades++;
            if (badGrades > 1) {
                hasBeenExcluded = true;
                break;
            }
            grade = Number(input[index]);
            index++;
            continue;
        }
        inClass++;
        sumGrades += grade;
        grade = Number(input[index]);
        index++;
    }
    if (hasBeenExcluded) {
        console.log(`${name} has been excluded at ${inClass} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${(sumGrades / 12).toFixed(2)}`);
    }
}
graduation(["Gosho",

    "5",

    "5.5",

    "6",

    "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])