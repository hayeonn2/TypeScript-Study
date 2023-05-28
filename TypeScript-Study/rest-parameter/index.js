// rest parameter : 무제한 파라미터가 들어올 수 있다.
// 다른 파라미터 있으면 맨 뒤에만 사용가능
function 함수() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
// array로 바꿔서 저장해준다.
함수(1, 4, 2, 3, 14);
// destructuring
var _a = ["안녕", 100], 변수1 = _a[0], 변수2 = _a[1];
var _b = { student: true, age: 20 }, student = _b.student, age = _b.age;
var 오브젝트 = { student: true, age: 20 };
function 함수4(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
함수4({ student: true, age: 20 });
// 예제1. 숫자 여러개 입력하면 최대값 리턴하는 함수 만들기
function 최댓값() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var result = 0;
    num.forEach(function (el) {
        if (result < el) {
            result = el;
        }
    });
    return result;
}
function 함수5(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
함수5({ user: "kim", comment: [3, 1, 2], admin: false });
function 함수6(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
