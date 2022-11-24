function Person(name, age) { // 생성자 함수
    this.name = name;
    this.age = age;
}
var capt = new Person('캡틴', 100);

// 위 아래 = 완전히 동일한 기능의 함수
// 생성자 함수를 사용하지 않더라도 클래스 문법을 사용하여 생성할 수 있다

class Person {
    // 클래스 로직
    constructor(name, age) {
        console.log('생성 되었습니다.');
        this.name = name;
        this.age = age;
    }
}

var haley = new Person('haley', 25); // 생성 되었습니다. < 가 콘솔창에 출력
console.log(haley);