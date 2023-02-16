class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // 접근자 프로퍼티 getter 함수
    get fullName() {
        return `${this.firstName} ${this.lastName}`; 
    }

    // 접근자 프로퍼티 setter 함수
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }    
}

const me = new Person('Heungmin', 'Son');
// 데이터 프로퍼티를 통한 값 참조
console.log(`${me.firstName} ${me.lastName}`);

// 접근자 프로퍼티를 통한 프로퍼티 값 저장
// 접근자 프로퍼티 fullName에 값 저장하면 setter 함수 호출
me.fullName = 'Daeho Lee';

// 접근자 프로퍼티를 통한 ㅡㅍ로퍼티 값 참조
// 접근자 프로퍼티 fullName에 접근하면 getter함수 호출
console.log(me.fullName); // Daeho Lee

console.log(Object.getOwnPropertyDescriptor(Person.prototype, 'fullName')); // {get: ƒ, set: ƒ, enumerable: false, configurable: true}

console.log('-----클래스 필드-----');

class Person2 {
    name = 'Lee';
}

const me2 = new Person2();
console.log(me2); // Person2 {name: 'Lee'}