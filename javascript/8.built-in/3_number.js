/**
 * number 클래스
 * - valueOf(), toString() ...
 */

let a = 100;
let b = 1234567;
let aa = new Number(100);
let bb = new Number(1234567);

console.log(a, typeof a);
console.log(aa, typeof aa);
console.log(b, typeof b);
console.log(bb, typeof bb);

console.log(a.valueOf()); //100, 자동변환, 원본 데이터타입 유지 
console.log(aa.valueOf());
console.log(b.valueOf()); //자동변환, 원본 데이터타입 유지 
console.log(bb.valueOf());

console.log(a.toLocaleString(), typeof a);  
console.log(aa.toLocaleString());  
console.log(b.toLocaleString()); 
console.log(bb.toLocaleString()); 

let localeNumber = b.toLocaleString();
console.log(localeNumber, typeof localeNumber);

let fnumber = '1234.84556';
let flocNumber = parseFloat(fnumber).toLocaleString();
let flocNumber2 = parseFloat(fnumber).toFixed(); //소수점 첫째자리 반올림
let flocNumber3 = parseFloat(fnumber).toFixed(2); //출력되는 소수점 자리수, 셋째자리
console.log('flocNumber=', flocNumber);
console.log('flocNumber2=', flocNumber2);
console.log('flocNumber3=', flocNumber3);
