console.log('-----사용자 정의 생성자 함수와 프로토타입 생성-----');

console.log(Person.prototype); // {constructor: ƒ}

function Person (name) {
    this.name = name;
}

const nonConstuctor = name => {
    this.name = name;
};

console.log(nonConstuctor.prototype); // undefined

console.log('-----프로토타입에 프로퍼티 추가-----');

Person.prototype.sayHello = function () {
    console.log(`My name is ${this.name}`);
};

const me = new Person('kim');
const you = new Person('yang');

me.sayHello(); // My name is kim
you.sayHello(); // My name is yang

console.log('-----오버라이딩 & 프로퍼티 셰도잉-----');
const Person2 = (function () {
    function Person2(name) {
        this.name = name;
    }

    Person2.prototype.sayHello = function () {
        console.log(`HI! my name is ${this.name}`);
    };

    return Person2;
}());

const me2 = new Person2('kim');

me2.sayHello = function () {
    console.log(`HEY! my name is ${this.name}`);
};

me2.sayHello(); // HEY! my name is kim

delete me2.sayHello;

me2.sayHello(); // HI! my name is kim

// 하위 객체를 통한 프로토타입 메서드 삭제는 불가!!!
delete me2.sayHello;

me2.sayHello(); // HI! my name is kim

// 프로토타입 메서드 변경 및 삭제
Person2.prototype.sayHello = function () {
    console.log(`HEY! my name is ${this.name}`);
};

me2.sayHello(); // HEY! my name is kim

delete Person2.prototype.sayHello;
// me2.sayHello(); // me2.sayHello is not a function

console.log('----프로토타입 교체-----');
console.log('1. 생성자 함수 이용');

const Person3 = (function () {
    function Person3 (name) {
        this.name = name;
    }

    Person3.prototype = {
        sayHello3() {
            console.log(`HI! my name is ${this.name}`);
        }
    };

    return Person3;
}());

const me3 = new Person3('kim');

console.log(me3.constructor === Person3); // false
console.log(me3.constructor === Object); // true

console.log('2. 인스턴스 이용');
const parent3 = {
    sayHello3() {
        console.log(`HI! my name is ${this.name}`);
    }
};

Object.setPrototypeOf(me3, parent3);

me3.sayHello3();

console.log(me3.constructor === Object); // true

console.log('-----직접 상속-----');
console.log('1.Object.create 사용');

// 프로토타입이 null인 객체 생성. 이 객체는 프로토타입 체인의 종점에 위치
let obj = Object.create(null);
console.log(Object.getPrototypeOf(obj) === null); // true


// console.log(obj.toString()); // Uncaught TypeError TypeError: obj.toString is not a function

// obj => Object.prototype => null
// obj = {}; 와 동일
obj = Object.create(Object.prototype); 
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

obj = Object.create(Object.prototype, {
    x: { value: 1, writable:true, enumerable: true, configurable: true }
});

console.log(obj.x); // 1
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

// 임의의 객체 상속받기
const myProto = { x: 10 };
obj = Object.create(myProto);

console.log(obj.x); // 10
console.log(Object.getPrototypeOf(obj)); // { x: 10 }
console.log(Object.getPrototypeOf(obj) === myProto); // true

const obj2 = Object.create(null);
obj2.a = 1;

console.log(Object.getPrototypeOf(obj2) === null); // true

// console.log(obj2.hasOwnProperty('a')); // Uncaught TypeError TypeError: obj2.hasOwnProperty is not a function
console.log(Object.prototype.hasOwnProperty.call(obj2, 'a'));  // true

console.log('----객체 리터럴 내부에서 __proto__에 의한 직접 상속-----');
const myProto3 = { x: 10 };

const obj3 = {
    y: 20,
    __proto__: myProto3
};

console.log(obj3.x, obj3.y); // 10 20
console.log(Object.getPrototypeOf(obj3) === myProto3); // true