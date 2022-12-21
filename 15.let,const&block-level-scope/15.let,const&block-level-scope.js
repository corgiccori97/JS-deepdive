console.log('----let 키워드-----');
// console.log(foo); // ReferenceError: cannot access 'foo' before initialization

let foo;
console.log(foo);

foo = 1;
console.log(foo);

console.log('----let 키워드 변수 호이스팅-----');

let foo2 = 1; // 전역 변수
{
    console.log(foo2); // cannot access 'foo2' before initialization
    let foo2 = 2; // 지역 변수
}

