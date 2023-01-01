console.log('-----상속이 필요한 코드-----');
function Circle(radius) {
    this.radius = radius;
    this.getArea = function () {
        return Math.PI * this.radius ** 2;
    };
}

// 반지름이 다른 두 원 생성
const circle1 = new Circle(1);
const circle2 = new Circle(2);

console.log(circle1.getArea === circle2.getArea); // false
console.log(circle1.getArea()); // 3.141592653589793
console.log(circle2.getArea()); // 12.566370614359172

console.log('-----상속 이용한 코드-----');
function Circle2(radius) {
    this.radius = radius;
}

Circle2.prototype.getArea2 = function () {
    return Math.PI * this.radius ** 2;
};

const circle3 = new Circle2(1);
const circle4 = new Circle2(2);

console.log(circle3.getArea2 === circle4.getArea2); // true
console.log(circle3.getArea2()); // 3.141592653589793
console.log(circle4.getArea2()); // 12.566370614359172

console.log('----prototype 프로퍼티-----');
console.log((function () {}).hasOwnProperty('prototype')); // true
console.log(({}).hasOwnProperty('prototype')); // false

const Person = name => {
    this.name = name;
};

console.log(Person.hasOwnProperty('prototype')); // false
console.log(Person.prototype); // undefined

console.log('-----__proto__접근자 프로퍼티와 prototype 프로퍼티-----');
function Person2 (name) {
    this.name = name;
}

const me = new Person2('me');

console.log(Person2.prototype === me.__proto__); // true

console.log('-----리터럴 표기법에 의해 생성된 객체의 생성자 함수와 프로토타입-----');
// 객체 리터럴
const obj = {};

// 함수 리터럴
const add = function (a, b) { return a + b; };

// 배열 리터럴
const arr = [1, 2, 3];

// 정규 표현식 리터럴
const regexp = /is/ig;

console.log(obj.constructor === Object); // true
console.log(add.constructor === Function); // true
console.log(arr.constructor === Array); // true
console.log(regexp.constructor === RegExp); // true

console.log(add.__proto__);