var 제목 = document.getElementById("#title");
// narrowing 방법 1
if (제목 !== null) {
    제목.innerHTML = "반가워요";
}
// narrowing 방법 2 = instanceof
if (제목 instanceof Element) {
    제목.innerHTML = "반가워요";
}
// narrowing 방법 3
// 무조건 타입을 Element로 확정해주는 것 (사기치는 것)
// 비상시, 100% 확정할때.. 막쓰면 안됨
var 제목2 = document.getElementById("#title");
제목2.innerHTML = "반가워요";
// narrowing 방법 4
// 제목에 innerHTML이 있으면 출력, 없으면 undefined
var 제목3 = document.getElementById("title");
if (제목3 === null || 제목3 === void 0 ? void 0 : 제목3.innerHTML) {
    제목3.innerHTML = "반가워요";
}
