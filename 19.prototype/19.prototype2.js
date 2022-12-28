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
