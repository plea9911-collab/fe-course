/**
 * 클래스간의 상속 관계 표현 : extends
 * 부모가 가지고 있는 필드, 메서드를 자식이 상속받아 사용하도록 정의
 * 
 */
//Animal(동물) 클레스를 상속받아, Dog, Tiger, Lion 자식 클래스 생성
//자식 is a 부모 : ⭕ => 자식 extends 부모 :: 자식클래스 정의

//부모: Animal 클래스 정의
class Animal {
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }
    display = () => console.log(this.name, this.emoji);
    sleep = () => console.log(`${this.name}(${this.emoji})가(이) 잠을 잔다.`)
}

//자식 Dog 클래스 정의, 자식  is a 부모 : ⭕
class Dog extends Animal {
    constructor(name, emoji, color) {
        super(name, emoji); //부모의 생성자 호출, name, emoji extends는 어디에 저장? 부모가 아닌 자식쪽에 저장(자식에 반환)
        this.color = color;
    }
    //display() 함수 주소 참조
    //sleep() 함수 주소 참조
}

class Poodle extends Dog {
    constructor(name, emoji, color, food) {
        super(name, emoji, color); // 반드시 맨 위에 호출해야함!
        // super(color); super은 동일하게 나오면 에러
        this.food = food; //-> 부모 super을 먼저 호출하고 자식을 호출해야한다.
    }
    //display() 함수 주소 참조
    sleep = () => console.log(`Poodle`);
    

}

/**
 * Dog {
 * display: [Function: display],
 * sleep: [Function: sleep], 부모의 함수 가져다 씀
 */
let animal = new Animal('animal', '😀')
console.log(animal);
animal.display();
animal.sleep();


let dog = new Dog('happy', '🐶', 'brown');
console.log(dog);
dog.display();
dog.sleep();

let dog2 = new Poodle('해피', '🐶', 'brown', '사료');
console.log(dog2);
dog.display();
dog.sleep();
