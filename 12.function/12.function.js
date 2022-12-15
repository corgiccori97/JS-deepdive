// 기명 함수 리터럴을 단독으로 사용하면 함수 선언문으로 해석됨
function foo() { console.log('foo'); }
foo(); // foo

// 함수 리터럴을 피연산자로 사용하면 함수 선언문이 아니라 함수 리터럴 표현식으로 해석됨
(function bar() { console.log('bar'); });
bar(); // bar is not defined