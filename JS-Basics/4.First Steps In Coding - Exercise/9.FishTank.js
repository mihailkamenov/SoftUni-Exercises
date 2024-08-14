function tank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentTaken = (100 - Number(input[3])) / 100;
    let volume = (length * width * height) / 1000 * percentTaken;
    console.log(volume);
}
tank(["85", "75", "47", "17"]);