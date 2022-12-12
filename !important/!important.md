
## :bulb: 식별자
- 메모리 상에 존재하는 어떤 값을 식별할 수 있는 모든 이름
- 값이 아니라 메모리 주소를 기억. 즉 식별자는 메모리 주소에 붙인 이름


## :bulb: 변수 선언
- var, let, const 로 선언. let, const는 var의 단점을 보완하기 위함
- var의 단점
    - 블록 레벨 스코프(block level scope)가 아닌 함수 레벨 스코프(function level scope)
    - 즉, 의도치 않게 전역 변수가 선언될 수도 있음
    - 변수의 중복 선언 가능

## :bulb: 변수 호이스팅
- js 엔진은 변수 선언의 소스 위치에 상관없이 다른 코드보다 먼저 실행
- :star2: 변수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 js 고유의 특징 :star2:

## :bulb: 타입 강제 변환 / 타입 강제 변환
- JS 엔진에 의해 **암묵적으로** 타입이 자동 변환되는 것
- +연산자는 피연산자 중 하나 이상이 문자열일 경우 문자열 연결 연산자로 동작
- 그 외의 경우, 산술 연산자로 동작
    > 1 + true; // 2 <br>
    > 1 + null; // 1 <br>
    > +undefined; // NaN (undefined는 숫자로 타입 변환 안 됨)
- 숫자 타입이 아닌 피연산자에 + 단항 연산자를 사용하면 피연산자를 숫자 타입으로 변환하여 반환. <br>  피연산자를 변경하는 것이 아니고 그냥 변환한 값을 생성해서 반환하는 것
    > var x = '1';   
    > console.log(+x); // 1

- -단항 연산자를 사용할 경우 피연산자의 부호를 반전한 값을 반환
    > -'10'; // -10 (숫자로 변환) <br>
    > -true; // -1 (불리언 값을 숫자로 변환) <br>
    > -'Hello'; // NaN (문자열은 숫자로 타입 변환 불가)

## :bulb: 객체 프로퍼티 접근
```
var person = {
    name: 'Kim'
};
```
- 마침표 표기법
    - console.log(person.name); // Kim
- 대괄호 표기법
    - :eight_spoked_asterisk: 내부에 지정하는 프로퍼티 키는 반드시 따옴표로 감싼 문자열일 것 :eight_spoked_asterisk:
    - console.log(person['name']); // Kim

## :bulb: 원시 값과 객체
- 원시 값을 변수에 할당하면 변수(확보된 메모리 공간)에는 :star:실제 값이:star: 저장 
- 객체 값을 변수에 할당하면 변수(확보된 메모리 공간)에는 :star:참조 값이:star: 저장
> 값에 의한 전달 (pass by value)
>> 원시 값을 갖는 변수를 다른 변수에 할당했을 때 원본의 원시 값이 복사되어 전달되는 것

> 참조에 의한 전달 (pass by reference)
>> 객체를 가리키는 변수를 다른 변수에 할당했을 때 원본의 참조 값이 복사되어 전달되는 것

## :bulb: 얕은 복사와 깊은 복사
- 얕은 복사
    - 객체를 프로퍼티 값으로 갖는 객체의 경우 한 단계까지 복사하는 것
        ```
        const o = { x: { y: 1 } };
        // 얕은 복사
        const c1 = { ...o };
        console.log(c1 === o); //false
        console.log(c1.x === o.x); // true
        ```
    - 객체를 할당한 변수를 다른 변수에 할당하는 것을 **얕은 복사라고 하기도 함**
        ```
        const o = { x: 1 };
        const c2 = o;
        console.log(c2 === o); // true 
        ```
- 깊은 복사
    - 객체를 프로퍼티 값으로 갖는 객체의 경우 중첩되어 있는 객체까지 모두 복사하는 것
        - :snake: _코드 내용 이해 안되니 나중에 다시 확인하기_ 
        ```
        const _ = require('lodash');
        // 깊은 복사
        const c2 = _.cloneDeep(o);
        console.log(c2 === o); // false
        console.log(c2.x === o.x); // false
        ```
    - 원시 값을 할당한 변수를 다른 변수에 할당하는 것을 **깊은 복사라고 하기도 함**
        ```
        const v = 1;
        const c1 = v;
        console.log(c1 === v); // true
        ```