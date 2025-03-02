function operationsBetweenNumbers(input) {
    let number1 = Number(input[0]);
    let number2 = Number(input[1]);
    let operator = input[2];

    let result = 0;
    let evenOrOdd = "";
    let remainder = 0;

    switch (operator) {
        case "+":
            result = number1 + number2;

            // if (result % 2 == 0) {
            //     evenOrOdd = "even";
            // } else {
            //     evenOrOdd = "odd";
            // }

            evenOrOdd = result % 2 == 0 ? "even" : "odd";

            console.log(`${number1} ${operator} ${number2} = ${result} - ${evenOrOdd}`);
            break;

        case "-":
            result = number1 - number2;

            evenOrOdd = result % 2 == 0 ? "even" : "odd";

            console.log(`${number1} ${operator} ${number2} = ${result} - ${evenOrOdd}`);
            break;

        case "*":
            result = number1 * number2;
            
            evenOrOdd = result % 2 == 0 ? "even" : "odd";

            console.log(`${number1} ${operator} ${number2} = ${result} - ${evenOrOdd}`);
            break;

        case "/":
            if (number2 == 0) {
                console.log(`Cannot divide ${number1} by zero`);
            } else {
                result = number1 / number2;
                console.log(`${number1} / ${number2} = ${result.toFixed(2)}`);
            }
            break;

        case "%":
            if (number2 == 0) {
                console.log(`Cannot divide ${number1} by zero`);
            } else {
                remainder = number1 % number2;
                console.log(`${number1} % ${number2} = ${remainder}`);
            }
            break;
    }
}
operationsBetweenNumbers(["10", "12", "+"]);