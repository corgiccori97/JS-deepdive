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