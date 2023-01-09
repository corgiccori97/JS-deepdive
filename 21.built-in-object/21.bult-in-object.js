const numObj = new Number(1.5);

console.log(numObj.toFixed()); // 2
console.log(Number.isInteger(0.5)); // false

console.log('-----2. 원시값과 래퍼 객체-----');
// ㉠
const str = 'hello';
console.log(str.length); // 5
console.log(str.toUpperCase()); // HELLO

// ㉡
str.name = 'Kim';

// ㉢

// ㉣
console.log(str.name); // undefined

// ㉤
console.log(typeof str, str); // string hello 