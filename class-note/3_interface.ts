interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
var haley: User = {
    age: 25,
    name: "Haley"
}

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}

const capt = {
    age: 30,
    name: "Captain"
}
getUser(capt);