function 함수7(a: string | undefined) {
  // && 연산자로 타입 체크하기
  // 1. a가 undefined이면 조건식이 undefined가 된다. (자동 실행 안됨)
  // 2. a가 string이면 typeof a === 'string' (트루 남음) - if문 실행
  // 익숙하지 않으면 그냥 if/else 쓰는게 명확함
  // if(변수 !== null) 조건식은 null, undefined 동시에 거를 수 있음.

  // && 연산자
  // 자료형을 넣으면 && 사이에서 처음 등장하는 falsy값을 찾아주고 그게 아니면 마지막 값을 남긴다.
  // falsy값은 false와 유사한 기능을 하는 null, undefined, NaN 값을 의미한다.
  if (a && typeof a === "string") {
  }
}

type Fish = { swim: string };
type Bird = { fly: string };

// typeof 연산자는 number, string, boolean object 이런식 판정 가능
// in 키워드로 object narrowing 가능 (서로 가진 속성명이 다르면 in 써보자)
function 함수8(animal: Fish | Bird) {
  if ("swim" in animal) {
    // Fish 타입인지 검사가능
    animal.swim;
  }
}

// instanceof 연산자로 오브젝트 narrowing 가능
// 오브젝트 instanceof 부모class;
// 오브젝트 두개가 비슷하면 이 오브젝트의 부모가 누군지 검사해주는 것
// let 날짜 = new Date();
// if(날짜 instanceof Date){

// }

// 예제
type Car1 = {
  wheel: "4개";
  color: string;
};

type Bike1 = {
  wheel: "2개";
  color: string;
};

// object 타입이 둘다 비슷하게 생김 => narrowing 어떻게?
// 속성명 in 오브젝트자료(불가능) => 속성이 똑같기 때문에
// 오브젝트 instanceof 부모class(불가능) => 부모가 없기때문에
// 오브젝트 타입마다 literal type 만들어두면 편하다 (유일하게 가지고 있는 것)
// car 타입가진애들은 무조건 4개만 가질 수 있는 것 (배타적인 속성)
// 비슷한 오브젝트 타입이 많다 => 리터럴 타입 넣어보기
function 함수9(x: Car1 | Bike1) {
  if (x.wheel === "4개") {
    // x가 Car 타입인지 구분할 수 있음
    console.log("x는 Car타입이에요");
  }
}

// 논리적으로 이 타입인지 특정지을 수 있으면 네로잉으로 인정해줌
