var Persons = /** @class */ (function () {
    // 복제되는게 항상 오브젝트이므로 리턴타입을 지정할 이유가 없다.
    function Persons(a) {
        this.name = a;
    }
    // prototype 함수 타입지정해서 쓸 것, 리턴 타입도 지정(리턴있길 원할 때)
    Persons.prototype.함수 = function (a) {
        console.log("안녕" + a);
    };
    return Persons;
}());
//Persons.prototype.함수 = function () {};
var 사람1 = new Persons("kim");
var 사람2 = new Persons("park");
console.log(사람1); // {name: "kim"}
사람1.함수("안녕");
// 예제1. Car 클래스 만들기
var Car = /** @class */ (function () {
    function Car(a, b) {
        this.model = a;
        this.price = b;
    }
    Car.prototype.tax = function () {
        return this.price * 0.1;
    };
    return Car;
}());
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
var Word = /** @class */ (function () {
    function Word() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var 숫자들 = [];
        var 문자들 = [];
        param.forEach(function (el) {
            if (typeof el === "string") {
                문자들.push(el);
            }
            else {
                숫자들.push(el);
            }
        });
        this.num = 숫자들;
        this.str = 문자들;
    }
    return Word;
}());
