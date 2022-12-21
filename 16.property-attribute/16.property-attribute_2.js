console.log('-----프로퍼티 정의-----');
const person = {};

Object.defineProperties(person, {
    firstName: {
        value: 'Sanghee',
        writable: true,
        enumerable: true,
        configurable: true
    },

    lastName: {
        value: 'Kim',
    },

    fullName: {
        get() {
            return `${this.firstName} ${this.lastName}`;
        },

        set(name) {
            [this.firstName, this.lastName] = name.split(' ');
        },
        enumerable: true,
        configurable: true
    },
});

person.fullName = 'Heungmin Son';
console.log(person); // {firstName: 'Heungmin', fullName: <accessor>, lastName: 'Kim'}

console.log('-----불변 객체 만들기-----');

const person2 = {
    name: 'Kim',
    address: { city: 'Busan'}
}

function deepFreeze(target) {
    if (target && typeof target == 'object' && !Object.isFrozen(target)) {
        Object.freeze(target);
        
        // 모든 프로퍼티 순회하며 재귀적으로 동결 
        Object.keys(target).forEach(key => deepFreeze(target[key]));
    }
    return target;
}

deepFreeze(person2);

console.log(Object.isFrozen(person2)); // true

// 중첩 객체까지 동결했는가?
console.log(Object.isFrozen(person2.address)); // true

person2.address.city = 'Seoul';
console.log(person2.address);