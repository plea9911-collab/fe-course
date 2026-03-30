/**
 * Rest Parameter(나머지 인자) : 파라미터 인자를 배열로 저장함
 * -함수의 매개변수에 정의함
 * -function 함수명(...Rest Parameter) {}
 * -const 함수명 = (...Rest Parameter) => {}
 */

// function add(a, b, ...numbers) {
//     console.log(a, b, numbers);
//     let sum = numbers.reduce((acc, cur) => acc + cur )
//     console.log(a, b, numbers, sum);
//     return a + b + sum;
// } 
function add(a, b, ...numbers) {
    return a + b + numbers.reduce((acc, cur) => acc + cur )
} //↑둘이 같지만 더 간결
const fadd = (f1, ...fruits) => {
    console.log(f1, ...fruits);
    // return {f1, ...fruits}; //parameter 데이터 요소를 하나하나 전개함
    return [f1, ...fruits]; //spread
}

let result1 = add(1, 2, 3, 4, 5);
let result2 = add(1, 2, 3, 4, 5, 3, 5, 5, 3, 2);
console.log(result1, result2);

let fruits = ['🍎', '🍏', '🍓']; //fruits 전역, 지역으로 에러 안생김
let fobj = fadd('🍋', ...fruits);  //그냥 fruits라 하면 rest 파라미터를 불러 배열을 생성하기 때문에 2차원 배열이 만들어짐. 2차원 배열을 만들지 않기 위해선 spread를 사용해야함. ...fruits : spread 연산자(전개 구문)
console.log('fobj = ', fobj);
