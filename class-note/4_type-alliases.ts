// interface Person {
//     name: string;
//     age: number;
// }

type Person = {
    name: string;
    age: number;
}

var haley: Person = {
    name: "haley",
    age: 25
}

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {

}