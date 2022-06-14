# Magazine
항해99 매거진 사이트<br>
### vite 를 사용한 프로젝트 빌드 <br>

vite 의 선정이류<br>
1.CRA는 Webpack을 사용합니다. Webpack은 자바스크립트 코드로 구성된 툴 <br>
2.자바스크립트는 interpreted 언어이기 때문에 느림<br>
3.처리해야 할 코드 양이 방대한 경우,그 단점이 확실히 느껴진다.<br>

Go와 같은 저급언어(low-level language)를 활용하여 자바스크립트 툴을 만들어낸 것이 Esbuild입니다.<br>
위와 같은 단점을 보완하기 위해 만든 것이라 한번 사용해 봐야 겠다고 생각이 들었습니다.<br>
<br><br>
### Container Presenter 방식의 패턴 적용
데이터 처리 부분과 화면을 보여주는 부븐의 구분으로 좀더 코드의 가독성을 높일 수 있다고 생각해서 사용 헀습니다.


### react-hook-form 방식 사용
input 태그 를 사용할떄 일괄전인 관리와 useRef 와 useState 등 훅 사용빈도를 줄여준다.

