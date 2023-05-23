// 2. 함수표현식에만 type alias 사용가능
var 함수3 = function (a) {
    return 10;
};
// object 안에 함수 만들기
var 회원정보 = {
    name: "kim",
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () { },
};
// 콜백함수
function 함수1(a) {
    a();
}
function 함수2() { }
함수1(함수2);
var ABC = function (x, y) {
    return x + y;
};
// 메서드 안에 타입지정하기
var 회원정보2 = {
    name: "kim",
    age: 30,
    plusTwo: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log("hi");
    },
};
회원정보2.plusTwo(1);
var cutZero = function (x) {
    var result = x.replace(/^0+/, "");
    return result;
};
var removeDash = function (x) {
    var result = x.replace(/-/g, "");
    return +result;
};
function 만들함수(a, func1, func2) {
    var result = func1(a);
    var result2 = func2(result);
    console.log(result2);
}
만들함수("1112", cutZero, removeDash);
