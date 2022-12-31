console.log('-----정적 프로퍼티/메서드-----');

function Person(name) {
    this.name = name;
}

Person.prototype.sayHi = function() {
    console.log(`HI! my name is ${this.name}`);
};

// 정적 프로퍼티
Person.staticProp = 'static prop';

Person.staticMethod = function() {
    console.log('static method');
};

const me = new Person('KIM');

Person.staticMethod(); // static method

me.staticMethod(); // Uncaught TypeError TypeError: me.staticMethod is not a function