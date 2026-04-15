//구구단
//for로 구구단
// for(let i=1; i<=9; i++) {
//     for(let j=2; j<10; j++){
//         output = '';
//         console.log(`${j}* ${i} = ${j*i} \t`);
//     }
// }

let start = 2;
let end = 9;
for(let i = 1; i <= 9; i++) {
    output='';
    for(let j = start; j<= end; j++ ) {
        output += `${j}* ${i} = ${j*i} \t`;
    }
    console.log(output);
}

//*산 만들기

for (let i = 1; i<6; i++) {
    let output= '';
    for (let j = 1; j<=i; j++) {
        output += `*`;
    }
    console.log(output);
}

//* 삼각형 만들기
let size = 5;
for (let i = 1; i<=size; i++) {
    let output= '';
    let space= '';
    output += ' '.repeat(size-i);
    output += '🍎'.repeat(i);
    console.log(output);
}
for (let i = size-1; i>=1; i--) {
    let output= '';
    let space= '';
    output += ' '.repeat(size-i);
    output += '🍏'.repeat(i);
    console.log(output);
}