/**
 * 변수를 객체의 값으로 정의하는 경우, property(key) 생략 ⭕
 */

let name= '홍길동';
let age = 30;
let address = '서울시 강남구';

let person = {
    // name: name,
    // age: age
    name, age, address
}
console.log(person);

//두 개의 값을 입력받아, 객체로 리턴하는 함수 생성
function createObject(x, y) {
    return { x, y }
}
const createObjectArrow = (x, y) => {
    return { x, y }
}

let number1 = createObject(1, 2); // {x:1}
let number2 = createObjectArrow(1, 2);
console.log(number1);
console.log(number2);

//사원의 이름, 나이, 주소, 소속부서 정보를 입력받아, 사원객체를 생성하고 반환하는 함수 정의
//createEmployee, arrow function 사용
const createEmployee = (name, age, address, department) => {
    return { name, age, address, department}
}
let emp1 = createEmployee('홍길동', 30, '서울시 강남구', '개발부');
let emp2 = createEmployee('Smith', 35, '부산시 해운대구', '영업부');
// let emp1 = {
//     name = '홍길동',
//     age =30,
//     ..비효율
// }
// function createEmployee(name, age, address, department) {
//     return {name, age, address, department}
// }
let empList = [
    ['홍길동', '30', '서울시', '개발부'],
    ['Smith', '35', '부산시 해운대구', '영업부'],
    ['이순신', '40', '인천시', 'HR']
];

// 데이터 출력
// for(let i=0; i<empList.length; i++) {
//     let rows = '';
//     for(let j=0; j<empList[i].length; j++) {
//         rows += empList[i][j]+'\t';
//     } 
//     console.log(rows);
// }

for(let i=0; i<empList.length; i++) {
    let object = {};
    for(let j=0; j<empList[i].length; j++) {
        if(j==0) object.name = empList[i][j];
        if(j==1) object.age = empList[i][j];
        if(j==2) object.address = empList[i][j];
        if(j==3) object.department = empList[i][j];
    } 
    console.log(object);
}
console.log();

for(let i=0; i<empList.length; i++) {
    let object = null;
    let name, age, address, department  = undefined;
    // let name = undefined;
    // let age = undefined;
    // let address = undefined;
    // let department = undefined;
    for(let j=0; j<empList[i].length; j++) {
        if(j==0) name = empList[i][j];
        if(j==1) age = empList[i][j];
        if(j==2) address = empList[i][j];
        if(j==3) department = empList[i][j];
    } 
    object = createEmployee(name, age, address, department)
    console.log(object);
}