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
var 제목3 = document.getElementById("#title");
if ((제목3 === null || 제목3 === void 0 ? void 0 : 제목3.innerHTML) !== undefined) {
    제목3.innerHTML = "반가워요";
}
// 링크 href 속성을 바꿔보자
var 링크 = document.querySelector(".link");
// union타입으로 불확실하다. Element | null 상태임
// narrowing으로 조건을 걸어준다.
// href는 HTMLAnchorElement로 잡아줘야 한다. (href, style, class)
if (링크 instanceof HTMLAnchorElement) {
    링크.href = "https://kakao.com";
}
var 버튼 = document.querySelector("#button");
// 옵셔널을 통해 있으면 이벤트 부착, 없으면 undefined
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener("click", function () { });
// 예제1. 버튼 눌렀을 때 이미지 바꾸기
var 이미지 = document.querySelector("#image");
if (이미지 instanceof HTMLImageElement) {
    이미지.src = "change.jpg";
}
// 예제2. 3개의 링크가 있다. 전부 카카오로 바꾸기
var 링크3 = document.querySelectorAll(".naver");
링크3.forEach(function (a) {
    if (a instanceof HTMLAnchorElement) {
        a.href = "https://kakao.com";
    }
});
