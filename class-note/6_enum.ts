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