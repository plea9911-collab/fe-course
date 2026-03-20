/**
 * 2단 ~ 9단까지 출력
 */

// for (let i=1; i<10; i++) {
//     for(let j=2; j<10; j++) {
//     } 
//     console.log(`${i}* ${j} = ${i*j}`);
// }

let start = 12;
let end = 19;
for (let i=1; i<10; i++) {
    let output = '';
    for(let j=start; j<=end; j++) {
        output += `${j}* ${i} = ${i*j} \t`;
    }
    console.log(output);
}

/**
 * 삼각형 별찍기
 */

/*

*
**
***
****
*****

*/
console.clear();
for(let i=1; i<=5; i++) {
    let output = '';
    // for(let j=1; j<=i; j++) {
    //     output += `*`
    // }
    output +='🌴'.repeat(i)
    console.log(output);
    
}

/**
 * 삼각형으로 초록색 사과 찍기 
 * -세번째 줄만 빨간색 사과 찍기
 */

// for(let i=1; i<=5; i++) {
//     let output = '';
//     for(let j=1; j<=i; j++) {
//         if(i === 3) {
//             output += `🍎` 
//         }
//         else{
//             output += `🍏`
//         }
//     }
//     console.log(output);
// }

/**
 * 정삼각형 찍기 - repeat(반복횟수) 함수 이용
 */
let size =10;
for(let i=1; i<=size; i++) { //정삼각형
    let output = '';
    let space = '';
    output +=' '.repeat(size-i);
    output +='🍍'.repeat(i);
    console.log(space,output);
}

for(let i=size-1; i>=1; i--) {   //역삼각형
    let output = '';
    let space = '';
    output +=' '.repeat(size-i);
    output +='🥭'.repeat(i);
    console.log(space,output);
}