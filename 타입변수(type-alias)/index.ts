// type Animal = string | number | undefined;
// let 동물: Animal = 123;

// 작명할 때 영어 대문자 국룰이다!
// type AnimalType = { name: string; age: number };
// let 동물: AnimalType = { name: "kim", age: 20 };

// 안에 오브젝트는 바뀔 수 있다.
const 출생지역 = { region: "seoul" };
출생지역.region = "busan";

// 타스는 수정못하게 막을 수 있다.
type Girlfriend = {
  // 읽기전용으로 바꾼다. 이 자료는 수정을 할 수 없다.
  // 자바스크립트 파일은 바꿔준다. 실행을 막는게 아니라 에디터에서만 잡아주는 경고사항임
  //readonly name: string;
  name?: string; // 네임속성은 선택사항이다! (스트링 또는 undefined)
};

const 여친: Girlfriend = {
  name: "엠버",
};

// 타입키워드는 여러개 합칠 수 있다.
type Name = string;
type Age = number;
type Person = Name | Age;

// 같은 이름의 type 변수 재정의 불가능하다.
type PositionX = { x: number };
type PositionY = { y: number };

// x, y 속성이 합쳐진다. (extend)
type NewType = PositionX & PositionY; // { x: number; y: number }

let position: NewType = { x: 10, y: 20 };

// 숙제
// 1.
type Obj1 = { x: number };
type Obj2 = { x: number };
type Obj3 = Obj1 & Obj2;

//개체 리터럴은 이름이 같은 여러 속성을 가질 수 없습니다.
//let obj: Obj3 = { x: 10, x: 20 };

// 2.
type ObjectType = { color?: string; size: number; readonly position: number[] };

let test: ObjectType = {
  size: 123,
  position: [1, 2],
};

// 3.
type User = {
  name: string;
  phone: number;
  email?: string;
};

// 4.
type UserType = {
  name: string;
  phone: number;
  email: string;
  children: boolean;
};

let girl: UserType = {
  name: "miranda",
  phone: 123123,
  email: "abc@gmail.com",
  children: false,
};

// 이렇게 안해도되고 합쳐도 됨
type Adult = { adult: boolean };
type NewUser = User & Adult;

let user2: NewUser = {
  name: "Miranda",
  adult: false,
  phone: 123,
};
