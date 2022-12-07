var person = {
    'last-name': 'KIM', // 식별자 네이밍 규칙을 준수하는 프로퍼티 키가 아님
    1: 10 
};

// ** 마침표 표기법 ** 
// person.'last-name'; // -> unexpected string
// person.last-name; // -> node.js에서는 name is not defined, 브라우저에서는 NaN

// ** 대괄호 표기법 **
// person[last-name] // -> last is not defined
person['last-name']; // KIM

// ----------------------------------------------------------
// js 엔진이 last를 먼저 평가하는데, last라는 프로퍼티가 없으므로 undefined로 평가됨. 따라서 person.last-name은 undefined-name과 같음
// node.js 환경에서는 name이라는 식별자가 없으므로 레퍼런스 에러가 발생하는데, 브라우저 상에서는 name이라는 전역 변수(window의 프로퍼티, 기본값은 빈 문자열)가 존재함. 따라서 undefined-'' 가 되므로 NaN이 됨
// ----------------------------------------------------------

// person.1; // -> syntaxerror: unexpected number
// person.'1'; //  -> syntaxerror: unexpected string
person[1]; // 10
person['1'] // 10

