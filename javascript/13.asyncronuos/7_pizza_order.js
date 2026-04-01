/**
 * 동기식, 비동기식 => 피자 주문 로직
 * -1. 주문 (동기)
 * -2. 피자 만들기 : 5초 (비동기)
 * -3. 배달 (동기)
 */

async function pizzaOrder(name, address) {
    //1. 주문
    console.log(`1. ${name} 고객 주문 완료!`);
    //2.피자 만들기
    let makePizza = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`2. 피자 완성`);
            resolve();
        }, 5000);
    }); //여기까진 객체 생성
    await makePizza
        .then(resolve=> console.log('resolve------->', resolve))
        .catch(reject=> console.log('reject-------->'));
    //3. 배달
    console.log(`3. ${address} 주소로 배달 완료!`);
    
}

pizzaOrder('홍길동', '서울시 강남구 123');