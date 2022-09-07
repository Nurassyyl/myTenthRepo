const alphabit = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let str = '[A-Z]';
console.log(str);
if (str == "[A-Z]") {
    for (let i = 0; i < alphabit.length; i++) {
        console.log(alphabit[i]);
    }
} else {
    console.log("No");
}

// let input = [[61, 32], [37, 6], [21, 21], [78, 91]];
// let output = [];
// for (let i = 0; i < input.length; i++) {
//     if (input[i][0] >= 55 && input[i][1] > 7) {
//         output.push("Senior");
//     } else {
//         output.push("Open");
//     }
// }

// console.log(output);