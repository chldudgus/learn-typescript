class PersonClass {
    private name: string; // 변수의 범위까지 설정 가능
    public age: number;
    readonly log: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
  }
}

// 리액트 예전 문법 - 클래스 기반 코드
class App extends React.Component {

}

// 리액트 최신 문법 - 훅 기반의 함수형 코드
function App() {
    return <div>Hello World</div>
}

//
new Vue({
    el: '',
    setup() {

    }
})