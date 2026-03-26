/**
 * math 클래스 - 모든 메소드와 속성이 static으로 정의되어 있음
 * -호출 : Math.메소드명(), Math.속성
 */

let a = 1234.56789;
console.log(`math.abs(value) :: ${Math.abs(a)}`); //절대값
console.log(`math.floor(value) :: ${Math.floor(a)}`); //소수점 절삭
console.log(`math.trunc(value) :: ${Math.trunc(a)}`); //소수점 절삭
console.log(`math.round(value) :: ${Math.round(a)}`); //소수점 반올림
console.log(`Number.tofixed() :: ${a.toFixed(2)}`); //소수점 반올림(자릿수 지정)
console.log(`Math.max(value) :: ${Math.max(1, 2, 3, 4, 5)}`); //5
console.log(`Math.min(value) :: ${Math.min(1, 2, 3, 4, 5)}`); //1
console.log(`Math.random(value) :: ${Math.random()}`); //0~1사이의 값이 임의로 출력

//1~100 사이의 숫자를 임의로 생성
const randNumber = () => Math.floor(Math.random() * 100 + 1);

//1~100 사이의 숫자를 임의로 생성
let number = Math.floor(Math.random() * 100 + 1);
console.log('number = ', number);
console.log('number = ', randNumber());

