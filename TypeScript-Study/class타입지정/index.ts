class Persons {
  //data: number = 0; 생략해도 됨
  // data = 0;

  // typescript constructor()는 필드값에 어쩌구가 미리 있어야
  // this.어쩌구 가능!
  name: string;

  // 복제되는게 항상 오브젝트이므로 리턴타입을 지정할 이유가 없다.
  constructor(a: string) {
    this.name = a;
  }

  // prototype 함수 타입지정해서 쓸 것, 리턴 타입도 지정(리턴있길 원할 때)
  함수(a: string) {
    console.log("안녕" + a);
  }
}

//Persons.prototype.함수 = function () {};

let 사람1 = new Persons("kim");
let 사람2 = new Persons("park");

console.log(사람1); // {name: "kim"}

사람1.함수("안녕");

// 예제1. Car 클래스 만들기

class Car {
  model: string;
  price: number;

  constructor(a: string, b: number) {
    this.model = a;
    this.price = b;
  }

  tax(): number {
    return this.price * 0.1;
  }
}

// 예제2. 클래스인데 파라미터가 잔뜩 들어간 class Word 만들기
/* 혼자 한 것
class Word {
  num: number[];
  str: string[];
  constructor(number: number[], string: string[]) {
    this.num = number;
    this.str = string;
  }
}
*/

//정답
class Word {
  num;
  str;

  constructor(...param: (number | string)[]) {
    let 숫자들: Number[] = [];
    let 문자들: string[] = [];

    param.forEach((el) => {
      if (typeof el === "string") {
        문자들.push(el);
      } else {
        숫자들.push(el);
      }
    });

    this.num = 숫자들;
    this.str = 문자들;
  }
}
