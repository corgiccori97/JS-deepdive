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

// me.staticMethod(); // Uncaught TypeError TypeError: me.staticMethod is not a function

console.log('-----프로퍼티 열거-----');
const arr = [1, 2, 3];
arr.x = 10;

// ㉠
for (const i in arr) {
    console.log(arr[i]); // 1 2 3 10
};

// ㉡ arr.length에 따라 출력
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // 1 2 3
}

// ㉢ 요소가 아닌 프로퍼티 제외
arr.forEach(v => console.log(v)); // 1 2 3

// ㉣ 변수 선언문에서 선언한 변수에 키가 아닌 값을 할당
for (const value of arr) {
    console.log(value);
};