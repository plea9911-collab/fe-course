/**
 * 동기식(sync) vs 비동기식(async)
 * (1) 동기식
 * - 위에서부터 순차적으로 한번에 하나씩 작업 실행(일하는 직원 1명)
 * - 코드 실행 > call stack > 바로 처리
 * 
 * (2) 비동기식
 * - 대량의 작업을 모아서, 나중에 처리 -> call stack이 비어있는 상태에서
 * - 코드 실행 > call stack > Web API(예.크롬), Background(NodeJS)영역에 저장 [call stack에 있는 경우에는 실행이 안되기 때문에 API에 보냄]
 *      > Task Queue 순차적으로 이동(저장) 
 *      > call stack이 비어있으면..
 *      > Event Loop 객체가 Task Queue에 있는 작업들을 call stack으로 보냄
 *      > call stack 작업 처리 후 종료
 * - setTimeout(), fatch(), axios(), DB 연동, 파일 I/O, ...
 */

function a() {
    b(); //return address
    setTimeout(() => { console.log(`Task Queue에 바로 저장됨!!`);});
    console.log(`----------> a `);
    
}
function b() {
    setTimeout(() => { console.log(`Task Queue에 1초 후에 저장됨!!`);});
    console.log(`----------> b `);
    
}
function c() {
    a(); //return address(복귀주소)
    console.log(`----------> c `);
    
}

c();
