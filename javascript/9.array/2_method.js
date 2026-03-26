/**
 * MDN 사이트에서 Array 클래스 메소드 확인
 * - push(), pop(), ...
 */

let numbers = [1, 2, 3, 4, 5];
let fruits = new Array ('🍏', '🍊', '🍎', '🍋', '🍅');

console.log(numbers.length);
console.log(fruits.length);

//1. 요소 추가 : push()
numbers.push(6);
fruits.push('🍓');

console.log(numbers);
console.log(fruits);

//2. 요소 출력 : keys()
let itNumbers = numbers.keys();

console.log(itNumbers);
for(let key of itNumbers) {
    console.log(`key = ${key}`);
}

//for..of : 확장 for문 - for내부에서 인덱스 관리 //for (값을 저장하는 변수선언 of 반복실행하는 객체) { 0:1, 1:2}
// for (let number of numbers) {
//     console.log(`number = ${number}`);
// }
// for (let fruit of fruits) {
//     console.log(`number = ${fruit}`);
// }

//3. 요소 삭제 : pop(), splice()
//3.1 마지막 요소 삭제
console.log(fruits);
console.log(`fruits = ${fruits.pop()}`);
console.log(fruits);
console.log(`fruits = ${fruits.pop()}`);
console.log(fruits);

//3.2 선택적 요소 삭제 및 교체, 아이템 추가
//splice(시작인덱스, 삭제갯수, 교체아이템)
//요소 삭제
console.log('fruits.splice(0, 2) = ', fruits.splice(0, 2)); //요소 삭제
console.log(fruits);
//요소 삭제 후 교체
console.log('fruits.splice(0, 2) = ', fruits.splice(0, 1,'🍍')); //요소 삭제 후 교체
console.log(fruits);
//삭제하지 않고 요소 추가
console.log('fruits.splice(0, 0, 교체아이템) = ', fruits.splice(0, 0,'🍉')); //요소 삭제 후 교체
console.log(fruits);

//4. 요소 추출 : slice(시작인덱스, 종료인덱스) - 새로운 배열 객체를 반환
console.clear();
console.log(numbers);
let subNumbers = numbers.slice(0, 3);
console.log(subNumbers);
// console.log(numbers.slice(0, 3));

//5. 얕은 복사 (shallow Copy)
//- 배열의 요소가 원시데이터 타입이면 독립적으로 생성 
//- 배열의 요소가 참조데이터(객체) 타입이면 주소를 공유함

//5.1 배열의 요소가 원시데이터 타입이면 독립적으로 생성 
const sfruit = ['🍎', '🍊', '🍋'];
const sfruitCopy1 = sfruit.slice(0, sfruit.length);
const sfruitCopy2 = Array.from(sfruit);
//sfruit의 0번지 과일을 딸기로 변경
sfruit[0] = '🍓'; //원본 영향❌

console.clear();
console.log(sfruit);
console.log(sfruitCopy1);
console.log(sfruitCopy2);

//5.2 배열의 요소가 참조데이터(객체) 타입이면 주소를 공유함
const sfruitObj = [
    {name:'orange', emoji:'🍊'},
    {name:'apple', emoji:'🍏'},
    {name:'lemon', emoji:'🍋'},
];
const sfruitObjCopy1 = sfruitObj.slice(0, sfruitObj.length)
const sfruitObjCopy2 = Array.from(sfruitObj);
//sfruitsObj의 '🍏'를 '🍎'로 변경
sfruitObj[1].emoji = '🍎';

console.clear();
console.log(sfruitObj);
console.log(sfruitObjCopy1);
console.log(sfruitObjCopy2);

//6. concat : 배열 객체 결합
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arrConcat = arr1.concat(arr2)
console.clear();
console.log(arrConcat);

//7. join : 배열 객체를 구분자로 분리하여 문자열로 반환
console.clear();
console.log(arrConcat);

let strJoin = arrConcat.join('-');
console.log(strJoin, typeof strJoin);

let spliteArray = strJoin.split('-');
console.log(spliteArray, typeof spliteArray);





