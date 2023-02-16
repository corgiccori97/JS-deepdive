class Person {
    // 생성자
    constructor(name) {
        this.name = name;
    }

    // 프로토타입 메서드
    sayHi() {
        console.log(`Hi! my name is ${this.name}`);
    }

    // 정적 메서드
    static sayHello() {
        console.log('Hello!');
    }
}

const me = new Person('Kim'); 

console.log(me.name); // Kim

me.sayHi(); // Hi! my name is Kim
Person.sayHello(); // Hello!

console.log('-----인스턴스 생성-----');
const Instance = class MyClass {};

const InstanceOfMe = new Instance();
// console.log(MyClass); // Uncaught ReferenceError ReferenceError: MyClass is not defined

console.log('-----프로토타입 메서드-----');
// me 객체의 프로토타입은 Person.prototype이다
console.log(Object.getPrototypeOf(me) === Person.prototype); // true

// Person.prototype의 프로토타입은 Object.prototype이다
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype); // true

// me 객체의 constructor는 Person 클래스다
console.log(me.constructor === Person); // true