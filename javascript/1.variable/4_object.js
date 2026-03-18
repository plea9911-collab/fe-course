/**
 * 참조 데이터 타입 : 객체(object)
 * -배열(Arrary) : [데이터, 데이터...]
 * 객체(Object) : {'프로퍼티': 데이터, '프로퍼티':데이터...}
 * 
 */

let apple = null;
apple =  {
    // 'name': 'apple',
    // 'color': 'red',
    // 'emoji': '🍎'
    name: 'apple',
    color: 'red',
    emoji: '🍎'
}
console.log(typeof apple);
console.log(apple);
console.log(apple.name);
console.log(apple.color);
console.log(apple.emoji);

//orange 객체를 생성 후 타입, 객체, name, color,price, emoji를 콘솔 출력
let ornage = null;
orange = {
    'name': 'ornage',
    'color': 'coral',
    'price': 1000,
    'emoji': '🍊'
}
console.log(typeof orange);
console.log(orange);
console.log(orange.name);
console.log(orange.color);
console.log(orange.price);
console.log(orange.emoji);

//배열 선언시 동일한 데이터 타입과 공통적인 속성들을 저장하는 것이 좋음
//다양한 데이터 타입 저장 가능⭕ 하지만 비추천
let fruitList = null;
// fruitList = ['apple', '🍎', 100, 200, true];
fruitList = ['🍎', '🍊', '🍉', '🍋', '🍍', '🍌', '🥭'];

console.log(fruitList);
console.log(fruitList[0]);
console.log(fruitList[1]);
console.log(fruitList[3]);
console.log(fruitList[5]);
console.log(fruitList[fruitList.length-1]);
console.log(fruitList.length);

//객체타입을 요소로 하는 배열 생성 --> 위에 데이터가 있을 때 가능 안그럼 오류
let fruitListObj = null;
fruitListObj = [apple, orange];
console.log(fruitListObj[0].name);
console.log(fruitListObj[1].emoji);
