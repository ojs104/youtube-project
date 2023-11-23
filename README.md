# 나만의 영화 유튜브 사이트 만들기
유튜브 API를 이용해서 영화보는 사이트를 만들겠습니다.
평소에 영화를 좋아하기 때문에 ......

## 완성작 보기
 
<img src="https://ojs104.github.io/youtube-project/src/assets/img/cover-min.jpg">


## 사용 스택
- Helmet: Helmet은 리액트 기반의 웹 애플리케이션에서 HTML 헤더를 관리하기 위한 컴포넌트입니다. Helmet을 사용하면 동적으로 타이틀이나 메타 태그를 변경할 수 있어 SEO 최적화에 도움을 줍니다. 예를 들어, 각 페이지의 제목이나 설명을 동적으로 변경하여 검색 엔진이 페이지를 더 잘 이해하게 도와줄 수 있습니다.

- scrollTo: 이 함수는 JavaScript에서 제공하는 window 객체의 메소드로, 특정 위치로 스크롤을 이동시키는 역할을 합니다. scrollTo 메소드는 두 개의 매개변수를 받습니다. 첫 번째 매개변수는 x 좌표(가로 위치), 두 번째 매개변수는 y 좌표(세로 위치)입니다. 이 함수를 사용하여 사용자가 웹 페이지의 특정 위치로 쉽게 이동할 수 있도록 도와줍니다.

- Suspense :
React Suspense는 리액트의 비동기 데이터 로딩을 처리하기 위한 기능입니다. 기존에는 데이터를 불러오는 동안 로딩 상태를 관리하기 위해 별도의 로딩<br> 컴포넌트를 만들거나 상태 변수를 사용해야 했습니다. 하지만 React Suspense를 사용하면 이러한 비동기 데이터 로딩을 더욱 간편하게 처리할 수 있습니다.<br><br>

React Suspense는 두 가지 주요 요소로 구성됩니다.<br><br>

Suspense 컴포넌트: 데이터 로딩이 완료될 때까지 다른 컴포넌트를 대신하여 보여줄 수 있는 컴포넌트입니다.<br>
Suspense 컴포넌트는 하위 컴포넌트들을 감싸고, fallback prop을 통해 로딩 중에 보여줄 컴포넌트나 UI를 지정할 수 있습니다.<br>

lazy 함수: 코드 스플리팅을 통해 컴포넌트의 번들 크기를 줄이기 위해 사용되는 함수입니다. lazy 함수는 동적으로 로딩할 컴포넌트를 지연 로딩(lazy loading)하기 위해 사용됩니다. lazy 함수로 생성된 컴포넌트는 Suspense 컴포넌트와 함께 사용될 수 있습니다.

- useNavigate: useNavigate는 React Router v6에서 새로 도입된 훅입니다. useNavigate를 사용하면 컴포넌트가 소유한 navigation을 직접 제어할 수 있게 됩니다.



## 트러블 슈팅



## 라이브러리 설치 
sass를 설치 : `npm install sass`
react-router-dom 설치 : `npm install react-router-dom`
react-icons 설치 : `npm intall react-icon`

##


