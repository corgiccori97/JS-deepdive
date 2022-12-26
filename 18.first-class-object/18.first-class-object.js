console.log('-----자바스크립트 함수는 일급 객체인가?-----');
// 1. 함수는 무명의 리터럴로 생성할 수 있다
// 2. 함수는 변수에 저장할 수 있다
const increase = function (num) {
    return ++num;
};

const decrease = function (num) {
    return --num;
};

// 2. 함수는 객체에 저장할 수 있다
const auxs = { increase, decrease };

// 3. 함수의 매개변수에 전달할 수 있다
// 4. 함수의 반환값으로 사용할 수 있다
function makeCounter(aux) {
    let num = 0;

    return function() {
        num = aux(num);
        return num;
    };
}

// 3. 함수는 매개변수에게 함수를 전달할 수 있다
const increaser = makeCounter(auxs.increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

const decreaser = makeCounter(auxs.decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2

// 함수 객체의 프로퍼티
console.log('-----함수 객체의 프로퍼티-----');

function square (num) {
    return num * num;
}

// 함수 객체의 내부
console.dir(square);
console.log(Object.getOwnPropertyDescriptors(square));
// {length: {…}, name: {…}, arguments: {…}, caller: {…}, prototype: {…}}

