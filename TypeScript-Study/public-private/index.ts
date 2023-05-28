class User3 {
  // name속성을 모든 자식들이 이용가능하다. 퍼블릭 키워드가 없어도 똑같음
  public name = "kim";
  constructor(a) {
    // constructor는 파라미터안에 값을 집어넣을 수 있다.
    this.name = a;
  }

  public 함수123() {} // 함수도 됨
}

let 유저1 = new User3("park");
유저1.name = "하이"; // 퍼블릭은 갖다쓰거나 수정가능

// Private
class User4 {
  private name = "kim"; // 수정불가능

  constructor(a) {
    this.name = a;
  }
}

let 유저2 = new User4("park");
//'name' 속성은 private이며 'User4' 클래스 내에서만 액세스할 수 있다.
// 유저2.name;

class User5 {
  name: string;
  private familyName: string = "kim"; // 변경을 막을 수 있음 (클래스안에서만 수정가능)

  constructor(a) {
    this.name = this.familyName + a;
  }

  이름변경함수() {
    this.familyName = "park";
  }
}

let 유저4 = new User5("park");
유저4.name; // kim park

// 밖에서 수정하게 하려면?
유저4.이름변경함수();

class Person3 {
  constructor(public name: string) {
    // 이 자리에 들어온 파라미터는 자식의 name 속성에 기입해라.
  }
}

let 자식 = new Person3("Kim");
// {name : 'kim'}

/**
 * Q. private 이걸 어따씀?

A. 개발하다보면 소중하게 지켜주고 싶은 중요한 변수나 속성들이 있습니다.

예를 들면 위의 예제에선 familyName 이런건데 이걸 외부에서 실수로 수정하거나 그러면 큰일날 것 같은 그런 속성들이요.

이걸 외부에서 실수로 수정하지 않도록 지켜주고 싶으면 private를 붙여보시길 바랍니다.

그리고 이걸 쓰면 함수를 만들어서 수정해야하니 약간의 안전장치를 더해서 개발이 가능합니다.

개발이 귀찮아지지만 버그를 예방해주는 키워드이며

react-redux 이런거 하다보면 매번 보게될 패턴입니다.
 */
