// 내가 등록한 문자만 들어오게 만들 수 있다. (literal types)
// 이 변수엔 무조건 'kim' 이라는 것만 들어올 수 있다.
var 이름;
// 버그방지, 자동완성 가능
var 개인정보;
개인정보 = "이름";
function 함수(a) {
    return 1;
}
함수("hello");
// 예제
// 가위바위보 문자 중 1개 입력가능
// 가위바위보 만 들어올 수 있는 array 리턴
function 묵찌빠(a) {
    return ["가위", "보"];
}
var 자료 = {
    name: "kim",
};
// as const : 이 오브젝트 자료 만들 때 리터럴 타입처럼 지정해주는 것
// object value 값을 그대로 타입으로 지정해줌.
// object 속성들에 모두 readonly 붙여줌.
// "kim"이라는 자료만 들어올 수 있습니다. (x)
// "kim"이라는 "타입"만 들어올 수 있습니다. (o)
// 자료.name의 타입은 string이다. 그래서 안에 넣으면 에러임
function 내함수(a) { }
// 에러
// 내함수(자료.name);
내함수(자료.name);
