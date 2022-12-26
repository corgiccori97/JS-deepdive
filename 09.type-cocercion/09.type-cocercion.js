// ** 문자열 타입으로 암묵적 변환 **
// 숫자 타입
console.log('** 문자열 타입 **');
str = 0 + '';
console.log(str);

str = Infinity + '';
console.log(str);

str = -1 + '';
console.log(str);

// 불리언 타입
str = true + '';
console.log(str);

str = false + '';
console.log(str);

str = null + '';
console.log(str);

// 심벌 타입
// str = (Symbol()) + '';
// console.log(str);

// 객체 타입
str =  ({}) + '';
console.log(str);

str = Math + '';
console.log(str);

str = [] + '';
console.log(str);

str = [10, 20] + '';
console.log(str);

str = (function(){}) + '';
console.log(str);

str = Array + '';
console.log(str);

// ** 숫자 타입으로 암묵적 전환 **
// 문자열 타입
console.log("\n ** 숫자 타입 **");
console.log(+'');
console.log(+'1');

// 불리언 타입
console.log(+true); // 1

// null 타입
console.log(+null); // 0

// 심벌 타입
// console.log(+Symbol()); // TypeError

// 객체 타입
console.log(+{}); // NaN
console.log(+[]); // 0
console.log(+[10, 20]); // NaN
console.log(+(function(){})); // NaN

