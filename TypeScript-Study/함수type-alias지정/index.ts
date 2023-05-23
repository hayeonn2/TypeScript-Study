// 1. 함수 타입은 () => {} 모양으로
type 함수타입 = (a: string) => number;

// 2. 함수표현식에만 type alias 사용가능
let 함수3: 함수타입 = function (a) {
  return 10;
};

// object 안에 함수 만들기
let 회원정보 = {
  name: "kim",
  plusOne(a) {
    return a + 1;
  },
  changeName: () => {},
};

// 콜백함수
function 함수1(a) {
  a();
}

function 함수2() {}

함수1(함수2);
// 함수2가 콜백함수

// function 타입도 type alias로 저장 가능하다.
type NumOut = (x: number, y: number) => number;
let ABC: NumOut = function (x, y) {
  return x + y;
};

// 메서드 안에 타입지정하기
let 회원정보2 = {
  name: "kim",
  age: 30,
  plusTwo(x: number): number {
    return x + 1;
  },
  changeName: (): void => {
    console.log("hi");
  },
};

회원정보2.plusTwo(1);

// 예제
type CutType = (x: string) => string;

let cutZero: CutType = (x) => {
  let result = x.replace(/^0+/, "");
  return result;
};

type RemoveType = (x: string) => number;
let removeDash: RemoveType = (x) => {
  let result = x.replace(/-/g, "");
  return +result;
};

// 3.
// 함수들을 파라미터로 넣는 함수를 제작
// 만들함수(문자, 함수, 함수)

type 함수타입1 = (a: string) => string;
type 함수타입2 = (a: string) => number;
function 만들함수(a: string, func1: 함수타입1, func2: 함수타입2) {
  let result = func1(a);
  let result2 = func2(result);
  console.log(result2);
}

만들함수("1112", cutZero, removeDash);
