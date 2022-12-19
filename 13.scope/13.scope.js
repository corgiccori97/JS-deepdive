var x = 'global';

function foo() {
    var x = 'local';
    console.log(x); // local
}

foo();

console.log(x); // global

// 렉시컬 스코프
console.log('-----렉시컬 스코프------');
var x2 = 1;

function foo2() {
    var x2 = 10;
    bar2();
}

function bar2() {
    console.log(x2);
}

foo2();
bar2();

// scope chain에 의한 함수 검색
console.log('-----스코프 체인------');

// 전역함수
function foo3() {
    console.log('global function foo');
}

function bar3() {
    // 중첩 함수
    function foo3() {
        console.log('local function foo');
    }
    foo3();
}

bar3(); // local function foo
foo3(); // global function foo
