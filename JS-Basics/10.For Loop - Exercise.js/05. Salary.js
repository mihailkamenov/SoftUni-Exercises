function lostAttention(input) {
    let tabsOpened = Number(input[0]);
    let salary = Number(input[1]);

    let fine = 0;

    for (let i = 0; i <= input.length; i++) {
        let site = input[i];
        switch (site) {
            case "Facebook":
                fine = 150;
                break;

            case "Instagram":
                fine = 100;
                break;

            case "Reddit":
                fine = 50;
                break;

            default:
                fine = 0;
                break;
        }
        salary -= fine;

    }

    if (salary <= 0) {
        console.log("You have lost your salary.");
        return;
    } else {
        console.log(salary);
    }
}
lostAttention(["10",

    "750",
    
    "Facebook",
    
    "Dev.bg",
    
    "Instagram",
    
    "Facebook",
    
    "Reddit",
    
    "Facebook",
    
    "Facebook"])