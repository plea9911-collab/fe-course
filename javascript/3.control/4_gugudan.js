/**
 * 구구단 : 2단 출력 
 * 
 *  2 * 1 = 2
 *  ..
 *  2 * 9 = 18
 */
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 1; i < number.length; i++) {
//     const element = number[i*2];
// }

//임의의 단을 입력받아 출력
let dan  = undefined
dan = 5;
for (let i = 1; i < 10; i++) {
    console.log(`${dan}* ${i} = ${dan*i}`);
}