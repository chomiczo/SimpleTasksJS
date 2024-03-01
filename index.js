// for (let i = 10; i >= 1; i--) {
//     process.stdout.write(i + ' ');
//     for (let j = 0; j <= 5; j++) {
//         process.stdout.write(j.toString());
//     }
//     console.log();
// }

// let result = '';

// for (let i = 1; i <= 10; i++) {
//     result += i + '-';
// }

// console.log(result);

// let rnd;
// do {
//     rnd = Math.floor(Math.random() * 21);
//     console.log(rnd);
// } while (rnd !== 10);

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     if (i % 2 === 0) {
//         console.log('+++++');
//     }
// }

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// for (let j = 1; j <= 10; j++) {
//     console.log(j);
// }
let plusSigns = '';
for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {
        for (let j = 1; j <= 5; j++) {
            plusSigns += '+';
        }
    }
    console.log(i + plusSigns);
}
