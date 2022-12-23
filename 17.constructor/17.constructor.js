console.log('-----constructor and non-constructor-----');
// 일반 함수 정의: 함수 선언문, 함수 표현식
function foo() {}
const bar = function () {};

// 프로퍼티 x의 값으로 할당된 것은 일반 함수로 정의된 함수. 이는 메서드로 인정X
const baz = {
    x: function () {}
};

new foo();
new bar();
new baz.x();

// 화살표 함수 정의
const arrow = () => {};

// new arrow(); // Uncaught TypeError TypeError: arrow is not a constructor

// 메서드 정의: ES6의 메서드 축약 표현만 메서드로 인정
const obj = {
    x() {}
};

// new obj.x(); // TypeError: obj.x is not a constructor

console.log('-----new.target-----');
function Circle(radius) {
    // 이 함수가 new 연산자와 함께 호출되지 않았다면
    if (!new.target) {
        // new 연산자와 함께 생성자 함수를 재귀호출하여 생성된 인스턴스 반환
        return new Circle(radius);
    }

    this.radius = radius;
    this.getDiameter = function() {
        return 2 * this.radius;
    };
}

// new 연산자 없이 생성자 함수를 호출하여도 new.target을 통해 생성자 함수로서 호출
const circle = Circle(5);
console.log(circle.getDiameter());