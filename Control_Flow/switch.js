// Switch checks values for a particular key and checks multiple assigned cases for that value

month = 12

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;

    default:
        console.log("Invalid Input");
        break;
}

// default case runs when all the written cases do not match.
// Break stops the code execution when one case matches the value, without break all the remaining cases would run except the default case