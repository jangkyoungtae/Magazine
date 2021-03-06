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
### 디자인패턴의 적용
Container Presenter 방식을 채용했다 

이유는 Container 부분의 데이터 관리와 Presenter 부분의 화면 관리 부분의 분할로 
코드의 가독성을 높이고 수정이 용이 하기 떄문에 채용했다.


### react-hook-form 방식 사용
input 태그 를 사용할떄 일괄전인 관리와 useRef 와 useState 등 훅 사용빈도를 줄여준다.

<hr>



# 공통 과제

## 프레임워크와 라이브러리의 차이점
프레임워크는 스스로 흐름을 가지고 있고 라이브러리는 흐름을 사용자가 가지고 컨트롤 합니다

예를들면 프레임워크는 집이고 라이브러리는 안에 있는 가구들로 표현 할수 있습니다.

<hr>

## 코드를 구현할때 예외처리를 위해 무엇을 했나요?

회원가입시 이메일 형식 체크와 비밀번호 와 비밀번호 확인의 동일성을 확인 하고
해당 조건이 만족 할때만 버튼이 활성화 되도록 boolean 값으로 체크 했습니다.


<hr>

# React 과제


## SPA란 무엇일까요?
Single Page Application 으로써
html,css,자바스크립트 등 모든 정보가 이미 내장되어 있는 상태로 , <br>
데이터가 필요할때만 서버 API를 호출하여 필요한 데이터만 불러와 화면에 보여주는 식이다.
<hr>

## 왜 리액트를 사용하나요?

1. React 공식 문서 가이드와 방대한 커뮤니티, 자료를 통해 쉽게 접하고 배울 수 있다.
2. 데이터가 변경되었을 때 효율적으로 렌더링을 수행할 수 있도록 한다.
3. 캡슐화된 컴포넌트가 스스로 상태를 관리하고 복잡한 UI도 효과적으로 구성할 수 있음
4. UI 수정과 재사용성이 좋으며, 코드 가독성을 높일 수 있다.

<hr>

## 컴포넌트란 무엇인가요?

![image](https://user-images.githubusercontent.com/49186181/173740582-9f44a700-002c-4649-a271-c0cbc36f2101.png)

재사용이 가능한 각각의 독립된 모듈을 뜻한다
위의 그림 처럼 조각들 또는 화면을 구성 하는 요소들을 컴포넌트 라고 한다.
<hr>

## CSR VS SSR

서버 사이드 렌더링 은 서버 측에서 웹 페이지에 대한 HTML을 생성하는 것을 의미합니다.

<br>

* HTML이 서버 측에서 완전히 형성되고 웹 크롤러가 HTML 페이지를 더 쉽게 인덱싱할 수 있기 때문에 더 나은 SEO 및 페이지 순위 .
* 서버에서 수신한 HTML을 브라우저에서 빠르게 구문 분석하여 즉시 표시할 수 있고 웹 페이지를 표시하기 위해 별도의 JS 번들을 다운로드하여 실행할 필요가 없기 때문에 CSR 앱이 렌더링하는 초기 페이지의 로드 시간이 더 빠릅니다 .
* 웹 페이지가 브라우저에 표시되면 완전히 대화식입니다(
예: FCP = TTI ).
* 웹 페이지의 HTML은 서버 측에서 생성되기 때문에 브라우저 Javascript가 비활성화된 경우에도 웹 페이지가 표시됩니다.
<br>
<br>
<br>

클라이언트 측 렌더링 은 HTML 노드를 빌드하기 위해 HTML DOM을 조작하는 브라우저 내에서 Javascript 코드를 실행하여 브라우저 측에서 HTML 구성 요소를 생성하는 것을 의미합니다.

<br>

* 초기 로드 후 웹 사이트의 모든 HTML이 HTML을 가져오기 위해 서버로 왕복하지 않고 클라이언트 측(Javascript에 의해)에서 생성되기 때문에 초기 로드 후 매우 빠르고 반응 이 좋습니다. 또한 모든 실시간 데이터 가져오기는 외부 API 호출을 만드는 클라이언트 측 Javascript 코드에 의해 클라이언트 측에서 처리될 수 있습니다.
<hr>

## Redux, Recoil, R-Q, SWR의 장/단점

### Redux의 장점

1. 단방향 모델링(한가지 방향으로만 바뀐다)임. action을 dispatch 할때마다 기록(history)이 남아 에러를 찾기 쉽다. 타임머신 기능을 사용할 수 있음

2. 상태의 중앙화 : 스토어(Store)라는 이름의 전역 자바스크립트 변수를 통해 상태를 한 곳에서 관리하는데, 이를 중앙화라 함. 전역 상태를 관리할때 굉장히 효과적

3. Redux는 상태를 읽기 전용으로 취급한다. 상태가 읽기 전용이므로, 이전 상태로 돌아가기 위해서는 그저 이전 상태를 현재 상태에 덮어쓰기만 하면 됨. 이런 식으로 실행 취소 기능을 구현.

### Redux의 단점

1. 아주 작은 기능이여도 리덕스로 구현하는 순간 몇 개의 파일(액션등을 미리 만들어놔야함)들을 필수로 만들어야하여 코드량이 늘어난다.

2. 타임머신 기능을 사용하려면 불변성 개념을 지켜야 사용할 수 있으므로 매번 state라는 객체를 만들어줘야 함

3. Redux는 상태를 읽기 전용으로 취급할 뿐, 실제 읽기 전용으로 만들어주지는 않습니다. 때문에 상태를 실수로 직접 변경하지 않도록 항상 주의해야 합니다. 이를 예방하기 위해 Immutable.js같은 라이브러리도 존재합니다.

4. 다른 것 다 필요 없고 상태 관리를 중앙화하는 것만 있어도 된다면 Context API 를 사용

### Recoil의 장점
1. 페이스북에서 React 비동기 처리를 위래 만들었던 라이브러리로 훨씬 리액트스러움 (hooks)
2. 러닝커브가 낮다
3. 보일러플레이트가 많지 않음(Redux는 한 처리를 위래 type > action > saga > reducer를 거쳐야한다)

### Recoil의 단점
1. 개발자 도구가 완벽하지 않다. 디버깅 및 스냅샷 테스트를 하는데 있어 신뢰성이 부족하다.
2. 모든 API들이 높은 신뢰성을 보장하지 않는다. useGetRecoilValue, useRecoilRefresher 등은 공식문서도 UNSTABLE로 분류.
### R-Q 의 장점 

1. 캐싱
2. get을 한 데이터에 대해 update를 하면 자동으로 get을 다시 수행한다. (예를 들면 게시판의 글을 가져왔을 때 게시판의 글을 생성하면 게시판 글을 get하는 api를 자동으로 실행 )
3. 데이터가 오래 되었다고 판단되면 다시 get (invalidateQueries)
4. 동일 데이터 여러번 요청하면 한번만 요청한다. (옵션에 따라 중복 호출 허용 시간 조절 가능)
5. 무한 스크롤 (Infinite Queries (opens new window))
6. 비동기 과정을 선언적으로 관리할 수 있다.
7. react hook과 사용하는 구조가 비슷하다.

### R-Q 의 단점 
1. 이렇듯 장점이 많지만 아쉽게도, 이 라이브러리는 나온 지 그리 오래되지 않았고, 아무래도 그동안 리액트 시장을 redux-saga가 지배하고 있었다 보니 아직은 그들에 비해 커뮤니티 규모가 그리 크지 않습니다. 때문에 queryKey에 대한 best practice 등이 잘 정립되지도 않은 것 같습니다.

### SWR의 장점
1.  페이지가 간단하다고 해서 컴포넌트구조도 간단한건 아니였다.

2.  렌더링에 필요한 데이터 외에도 로그인상태를 통해서 얻을수 있는정보들은 전역에서 관리해주면편하다.

3.  협업시에 전역상태관리를 안하면 많은 파일을 만지게 되고 이는 컨플릭트 유발 가능성을 더 염두해야한다.

 

### SWR의 단점

<hr>

## 선택한 상태관리 툴과 그 이유

<br>
선택한툴은 Recoil 과 React Query
<br>

### Recoil 을 선택한 이유

<br>
먼저 상태 관리 툴이 필요하지만 리덕스에 비해서 확실히 코드량이 줄어 들고 설계가 간편하다
두번째로 한번도 사용해보지 않은 라이브러리 이므로 경험하고자 사용했다.

<br>
### React Query 를 선택한 이유
Recoil 로만 상태관리를 하기엔 미들웨어쪽이 컨트롤이 쉽지 않으므로 서버 상태관리 툴이 필요하다
근데 그렇다고 리덕스 툴킷을 쓰기엔 리코일을 쓰는 이유가 없기때문에 리액트 쿼리를 선택했다.

<hr>
