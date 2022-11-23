// 숫자형 이넘
enum Shoes {
    Nike,
    Adidas
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 0 출력

// 문자형 이넘
enum Shoes1 {
  Nike = "나이키",
  Adidas = "아디다스",
}

var myShoes1 = Shoes1.Nike;
console.log(myShoes1);

// 예제
enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQuestion(answer: Answer): void {
    if (answer == Answer.Yes) {
        console.log("정답입니다.");
    }
    if (answer == Answer.No) {
        console.log('오답입니다.');
    }
}
askQuestion(Answer.Yes);
// askQuestion('예스');
// askQuestion('y');
// askQuestion('Yes');