// rest parameter : 무제한 파라미터가 들어올 수 있다.
// 다른 파라미터 있으면 맨 뒤에만 사용가능
function 함수(...a: number[]) {
  console.log(a);
}

// array로 바꿔서 저장해준다.
함수(1, 4, 2, 3, 14);

// destructuring
let [변수1, 변수2] = ["안녕", 100];

let { student: student, age: age } = { student: true, age: 20 };
let 오브젝트 = { student: true, age: 20 };
function 함수4({ student, age }) {
  console.log(student, age);
}

함수4({ student: true, age: 20 });

// 예제1. 숫자 여러개 입력하면 최대값 리턴하는 함수 만들기
function 최댓값(...num: number[]): number {
  let result = 0;

  num.forEach((el) => {
    if (result < el) {
      result = el;
    }
  });
  return result;
}

// 예제2. object 자료를 파라미터로 입력할 수 있는 함수 만들기
/*
function 함수5({
  user,
  comment,
  admin,
}: {
  user: string;
  comment: number[];
  admin: boolean;
}) {
  console.log({ user, comment, admin });
}
*/

type UserType1 = {
  user: string;
  comment: number[];
  admin: boolean;
};

function 함수5({ user, comment, admin }: UserType1): void {
  console.log(user, comment, admin);
}

함수5({ user: "kim", comment: [3, 1, 2], admin: false });

// 예제3. 이렇게 생긴 array 자료를 파라미터로 입력하는 함수 만들기
// 함수([40, "wine", false])
/*
function 함수6([year, name, bool]: [number, string, boolean]) {
  console.log(year, name, bool);
}
함수6([40, "wine", false]);
*/

type 어레이 = (number | string | boolean)[];

function 함수6([a, b, c]: 어레이) {
  console.log(a, b, c);
}
