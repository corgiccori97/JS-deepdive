console.log('----암묵적 전역과 strict mode의 필요성-----');
function foo() {
    x = 10;
}

foo();

console.log(x); // 10

console.log('-----strict mode 적용 예시-----');
(function () {
    'use strict';

    x = 1;
    console.log(x); 
}());

function foo2() {
    'use strict';

    x = 10;

    // console.log(x);
}

(function() {
    'use strict';

    var x = 1;
    // delete x; // Delete of an unqualified identifier in strict mode

    function foo(a) {
        // delete a; // Error
    }

    // delete foo; // Error!!!
}());

console.log('-----strict mode 적용에 의한 변화-----');
console.log('1. this');

(function () {
    'use strict';

    function foo3() {
        console.log(this); // undefined
    }
    foo3();

    function Foo3() {
        console.log(this); // Foo3
    }

    new Foo3();
}());