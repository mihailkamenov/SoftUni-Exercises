function password(input) {
    let tryP = input[0];
    let realPass = "s3cr3t!P@ssw0rd";

    if (tryP == realPass) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}
password(["s3cr3t!P@aga"])