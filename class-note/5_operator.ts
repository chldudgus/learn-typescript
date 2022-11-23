// function logMessage(value: any) {
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100);

var haley: string | number | boolean;
function logMessage(value: string | number) {
    if (typeof value == 'number') {
        value.toLocaleString();
    }
    if (typeof value == 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeone(someone: Developer | Person) {
    // someone.name;
    // someone.skill
    // someone.age
}
askSomeone({ name: 'Developer', skill: 'TS' });
askSomeone({ name: 'captain', age: 100 });

function askSomeone1(someone: Developer & Person) {
  someone.name;
  someone.skill
  someone.age
}

askSomeone1({ name: "Developer", skill: "TS", age: 25 });

// var haley: string | number | boolean;
// var capt: string & number & boolean;