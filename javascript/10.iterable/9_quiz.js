/**
 * 중복된 배열 객체를 입력받아, 중복을 제거한 후 출력하는 함수 생성
 */
function filter(array) {
    return new Set(array);
} //Set은 중복이 안된다.
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
console.log(numbers);
console.log(filter(numbers)); //중복되는것들은 걸러짐. 새로운 객체를 생성
console.log(filter['홍길동', '스미스', '이순신', '홍길동']);

let mySet = new Set();
mySet.add(100);
mySet.add('홍길동');

let myArray = new Array(mySet);
console.log(myArray);
console.log(myArray[0]);

/**
 * 구조 분해 할당
 */
const gerObject1 = () => {
    return {
        name:'홍길동',
        age: 30,
        job: '개발자',
        address: '서울시'
    }
}

const gerObject2 = () => {
    return [1, 2, 3, 4, 5];
}

let {name, age, job, address} = gerObject1();
let [n1, n2, n3, n4, n5] = gerObject2();
console.clear();
console.log(name, age, job, address);
console.log(n1, n2, n3, n4, n5);


//textList 입력받아, 3글자 이상의 text이면 새로운 배열 생성
//함수 생성
const textFilter1 = (textFilter1) => {
    return textList.filter(text => text.length >=3);
}
//textList를 입력받아, 글자 이하의 text이면 새로운 배열을 생성하는 함수 정의 
const textFilter2 = (textFilter2) => {
    return textList.filter(text => !(text.length >=3));
}

let result = textFilter1(['javascript', 'React', 'html', 'css', 'a', 'ab']);
let result2 = textFilter2(['javascript', 'React', 'html', 'css', 'a', 'ab']);
console.log(result);
console.log(result2);
