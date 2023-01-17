function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.getDiameter = function() {
    return 2 * this.radius;
};

const circle = new Circle(5);

console.log('-----this 바인딩(일반 함수)-----');

var value = 1;

const obj = {
    value: 100,
    foo() {
        setTimeout(() => console.log(this.value), 100); // 100
    }
};

obj.foo();

console.log('-----this 바인딩(간접 호출)-----');

function getThisBinding() {
    console.log(arguments);
    return this;
} 

const thisArg = { a : 1 };

console.log(getThisBinding.apply(thisArg, [1, 2, 3]));
console.log(getThisBinding.call(thisArg, 1, 2, 3));