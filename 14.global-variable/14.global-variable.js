// 변수의 생명 주기
console.log('-----변수의 생명주기-----')
var x = 'global';

function foo() {
    console.log(x); // undefined
    var x = 'local';
}

foo()

console.log(x); // global
