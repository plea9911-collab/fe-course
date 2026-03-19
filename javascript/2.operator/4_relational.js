/**
 * 비교 연산자: >, <, >=, <=, ==(값비교), ===(값+데이터타입)
 * -결과값은 boolean 타입
 * -제어문의 조건 비교시 사용, if, while
 */

let a = 3;
let b = 7;
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a === b);
console.log();

const Obj1 = {name: '홍길동', age: 30}
const Obj2 = {name: '홍길동', age: '30'}
console.log(Obj1 == Obj2);
console.log(Obj1 === Obj2);
console.log(Obj1.name == Obj2.name);
console.log(Obj1.name === Obj2.name);
console.log(Obj1.age == Obj2.age);
console.log(typeof Obj1.age,typeof Obj2.age);
