// 내부 슬롯, 내부 메서드 접근
console.log('-----내부 슬롯과 내부 메서드의 직간접적 접근-----');

const o = {};

// console.log(o.[[Prototype]]);

// console.log(o.__proto__);

console.log('-----프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체-----');

const person = {
    name: 'kim'
};

console.log(Object.getOwnPropertyDescriptor(person, 'name')); // {value: 'kim', writable: true, enumerable: true, configurable: true}

person.age = 20;

console.log(Object.getOwnPropertyDescriptors(person)); // {name: {…}, age: {…}}

console.log('-----데이터 프로퍼티와 접근자 프로퍼티-----');

const person2 = {
    firstName: 'Sanghee',
    lastName: 'Kim',

    // getter 함수
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    // setter 함수
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
};

// 데이터 프로퍼티를 통한 프로퍼티 값 참조
console.log(person2.firstName + ' ' + person2.lastName); // Sanghee Kim

// 접근자 프로퍼티를 통한 프로퍼티 값 저장
// 접근자 프로퍼티 fullName에 값 저장하면 setter 함수 호출
person2.fullName = 'Heungmin Son';
console.log(person2); // {firstName: 'Heungmin', lastName: 'Son', fullName: <accessor>}

// 접근자 프로퍼티를 통한 프로퍼티 값 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수 호출
console.log(person2.fullName); // Heungmin Son

console.log('-----프로퍼티 디스크립터 객체 확인-----');
let descriptor = Object.getOwnPropertyDescriptor(person2, 'firstName');
console.log(descriptor);

descriptor = Object.getOwnPropertyDescriptor(person2, 'fullName');
console.log(descriptor);