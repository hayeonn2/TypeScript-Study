function 함수10() {
    // return값이 있으면 안된다.
    // 함수 실행이 끝나지 않아야한다. endpoint가 없어야한다.
    //throw new Error(); // 강제로 에러를 낸다. 코드실행 중단됨
    while (true) {
        // 참일때 계속 반복문을 돈다.
        // 트루로 강제 지정해 무한히 돈다. 끝나지않음
    }
}
// 어디다 쓰지? - 쓸데 없음 거의 대부분 :void 쓰면 됨
// 알아야 되는 이유 : 코드 이상하게 짜면 출몰한다.
// 1. 뭔가 이상한 narrowing
function 함수11(parameter) {
    if (typeof parameter === "string") {
        console.log(parameter);
    }
    else {
        console.log(parameter); // 파라미터가 never가 됨
    }
}
// 2. 어떤 함수표현식은 리턴타입이 자동으로 네버가 됨
var 함수12 = function () {
    // never타입 리턴
    throw new Error();
};
