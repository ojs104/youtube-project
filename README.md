# 나만의 축구 유튜브 사이트 만들기
환영합니다! 여러분을 축구의 세계로 초대합니다.

여기는 나만의 축구 유튜브, "FOOTBALL YOUTUBE" 입니다. 평소 축구에 대한 무한한 열정과 흥미로운 여정을 함께 나누어보아요.

다양한 축구 주제에 대한 흥미로운 유튜버들의 콘텐츠가 여러분을 기다리고 있습니다. 우리는 유튜버들이 제공하는 축구 영상들을 살펴보며 축구 매력에 푹 빠져보아요.

새로운 관점과 함께 다가오는 경기, 축구의 미학, 선수들의 비하인드 스토리, 그리고 축구 세계의 뒷 이야기까지 모두 다룰 예정이에요. 여러분이 감동하고 깊이 생각하게 될 축구의 다양한 이야기를 공유하며, 함께 성장하는 공간이 되길 희망합니다.

FOOTBALL YOUTUBE에서는 축구의 아름다움과 깊이 있는 내용을 탐험하며, 새로운 통찰력을 얻어보세요. 

축구의 매력을 새롭게 발견하며, 함께 더 멋진 곳으로 나아가는 여정에 동참해보세요!

## 완성작 보기
 
<img src="https://ojs104.github.io/youtube-project/src/assets/img/football-min.jpg">
<img src="https://ojs104.github.io/youtube-project/src/assets/img/football2-min.jpg">

## 설치
`npm install react-router-dom axios react-icon react-player sass react-helmet-async swiper`

1. react-router-dom은 React 프로젝트에서 브라우저 기반의 라우팅을 구현하기 위한 패키지입니다. 이 패키지를 사용하면 React 애플리케이션에서 페이지 간의 네비게이션 및 라우팅을 쉽게 관리할 수 있습니다.

2. axios는 HTTP 클라이언트 라이브러리로, 서버와의 데이터 통신을 위해 많이 사용됩니다. 만약 Axios를 프로젝트에 추가하려면, 다음과 같이 npm 명령어를 사용합니다:

3. react-player는 React 애플리케이션에서 동영상과 음악 등의 미디어를 쉽게 재생할 수 있도록 도와주는 React 컴포넌트입니다. 

4. react-helmet-async은 React 애플리케이션에서 동적으로 head 요소를 조작할 수 있게 해주는 라이브러리입니다. 

5. swiper는 모바일 및 데스크톱에서 사용할 수 있는 터치 슬라이드 라이브러리입니다.


## 작업순서
- react 설치 `npx create-react-app 프로젝트이름`

- App.js와 Index.js를 제외한 쓸모없는 파일들 삭제

- App.js에 각 섹션을 만들고, components파일에 각 섹션들을 컴포넌트화

- YoutubeAPI키를 사용하기위해 .env파일을 만든뒤 `REACT_APP_YOUTUBE_API_KEY=[유튜브API키]` 를 설정하고, .gitignore에 env파일을 추가하고 재시작

- env: 프로젝트의 최상위 루트에 위치하며, 민감한 정보 및 환경 변수를 저장해 보안을 강화하고 유지보수를 용이.

- 더 보기 버튼을 클릭하면, nextPageToken을 받아와서 다음 영상들을 보이게 작업

- 검색페이지 컴포넌트를 만든 후 검색기능 구현


### 메인 페이지 SEO 설정하기

- 리액트는 싱글 페이지로 구성되어 있기 때문에 SEO에 대한 노출이 약한 편입니다. 그래서 리액트의 단점을 극복하기 위한 방법으로 페이지 별로 페이지에 대한 설명이나 타이틀을 작업해주겠습니다. 이 작업을 하기 위해서는 react-helmet-async 라이브러리가 설치되어 있어야 합니다. 
                        
`SEO는 "Search Engine Optimization"의 약어로, 검색 엔진 최적화를 의미합니다. SEO는 웹사이트나 웹 페이지를 검색 엔진(예: Google, Bing, Yahoo)에서 높은 순위로 표시되도록 최적화하는 프로세스와 전략을 나타냅니다. 이를 통해 웹사이트가 검색 결과 페이지(SERP)에서 더 높은 순위에 나타나고, 더 많은 유기적(자연적) 트래픽을 확보하려는 목적으로 사용됩니다.`


- react-helmet-async 라이브러리는 React 애플리케이션에서 동적으로 HTML `<head>` 요소를 관리하기 위한 도구입니다. 이 라이브러리의 HelmetProvider와 Helmet 컴포넌트는 페이지의 `<head>` 내부에 있는 메타데이터를 조작하고 제어하는 데 사용됩니다.

- HelmetProvider: react-helmet-async의 HelmetProvider 컴포넌트를 사용하여 Helmet 컴포넌트를 초기화합니다. Helmet은 페이지의 헤드 태그에 메타 데이터와 타이틀을 동적으로 추가하거나 변경하는 데 사용됩니다.

- Helmet: Helmet : Helmet 컴포넌트를 사용하여 페이지의 메타 데이터와 타이틀을 설정합니다. 이 컴포넌트를 사용하면 서버 사이드 렌더링(SSR) 및 동적 페이지 제목 설정과 같은 작업을 쉽게 수행할 수 있습니다. 주로 title, meta, link, script 등의 태그를 동적으로 조작하는 데 사용됩니다.

- titleTemplate : 페이지 타이틀의 템플릿을 설정합니다. %s는 나중에 실제 타이틀로 대체됩니다.

- defer : true로 설정하면 렌더링 전까지 <Helmet> 컴포넌트가 기다립니다.

- <meta name='description' content={props.description} /> : props로 전달된 title과 description 값을 사용하여 페이지의 타이틀과 메타 설명을 설정합니다. props.title과 props.description이 없는 경우, 기본값으로 "Football Youtube"가 타이틀로 설정됩니다.

### useEffect 
useEffect는 React 함수 컴포넌트에서 비동기 작업을 수행하거나 부수 효과를 다룰 때 사용되는 특별한 훅(Hook) 중 하나입니다. 
주로 컴포넌트의 생명주기 메소드(예: componentDidMount, componentDidUpdate, componentWillUnmount)와 비슷한 역할을 하며, 
컴포넌트의 상태나 DOM 업데이트와 관련된 작업을 수행하는 데 사용됩니다.<br>
부수 효과 처리: 비동기 작업(데이터 가져오기, API 호출, 타이머 설정 등)을 수행할 수 있습니다. 이러한 작업은 컴포넌트의 렌더링과 독립적으로 처리됩니다.
상태 업데이트: useState 훅을 사용하여 상태를 변경하고, 변경된 상태에 따른 추가적인 렌더링을 트리거합니다.
DOM 조작: 컴포넌트가 화면에 렌더링된 후에 DOM 요소를 조작하거나 이벤트 처리 등을 수행할 수 있습니다.

### useState
useState 훅은 상태 관리를 위해 사용됩니다. 함수형 컴포넌트 내에서 상태를 생성하고 업데이트할 수 있게 해줍니다. 예를 들어, const [count, setCount] = useState(0)와 같이 사용할 수 있습니다. count는 현재 상태 값이고, setCount는 상태를 업데이트하는 함수입니다.
### useEffect 
useEffect 훅은 부수 효과를 다루기 위해 사용됩니다. 컴포넌트가 마운트, 업데이트, 혹은 언마운트될 때 특정 작업(비동기 작업, 상태 업데이트, DOM 조작 등)을 수행할 수 있습니다.
### useContext
useContext 훅은 컨텍스트를 활용하여 컴포넌트 간에 상태를 공유할 때 사용됩니다. React.createContext로 생성한 컨텍스트를 사용하여 값을 공유하거나 설정할 수 있습니다.
### useReducer
useReducer 훅은 상태 업데이트를 다룰 때 사용됩니다. 클래스 컴포넌트에서 setState 대신 사용할 수 있으며, 복잡한 상태 관리에 유용합니다.
### useRef 
useRef 훅은 ref 객체를 생성하고 다룰 때 사용됩니다. 주로 DOM 요소에 접근하거나 다른 목적으로 ref를 사용할 때 활용됩니다.
### useMemo 및 useCallback 
useMemo와 useCallback 훅은 성능 최적화를 위해 사용됩니다. useMemo는 계산 비용이 높은 값을 캐시하고, useCallback은 메모이제이션된 함수를 생성합니다.
### Custom Hooks 
사용자 정의 훅을 생성하여 컴포넌트 간 코드 재사용을 간편하게 할 수 있습니다. 예를 들어, 데이터 가져오기, 로컬 스토리지 액세스, 인증 등을 처리하는 훅을 만들 수 있습니다.

### useNavigate
useNavigate는 React Router v6에서 새로 도입된 훅입니다. useNavigate를 사용하면 컴포넌트가 소유한 navigation을 직접 제어할 수 있게 됩니다.


### scrollTo
이 함수는 JavaScript에서 제공하는 window 객체의 메소드로, 특정 위치로 스크롤을 이동시키는 역할을 합니다. scrollTo 메소드는 두 개의 매개변수를 받습니다. 첫 번째 매개변수는 x 좌표(가로 위치), 두 번째 매개변수는 y 좌표(세로 위치)입니다. 이 함수를 사용하여 사용자가 웹 페이지의 특정 위치로 쉽게 이동할 수 있도록 도와줍니다.

### Suspense :
React Suspense는 리액트의 비동기 데이터 로딩을 처리하기 위한 기능입니다. 기존에는 데이터를 불러오는 동안 로딩 상태를 관리하기 위해 별도의 로딩<br> 컴포넌트를 만들거나 상태 변수를 사용해야 했습니다. 하지만 React Suspense를 사용하면 이러한 비동기 데이터 로딩을 더욱 간편하게 처리할 수 있습니다.<br>
React Suspense는 두 가지 주요 요소로 구성됩니다.<br>
Suspense 컴포넌트: 데이터 로딩이 완료될 때까지 다른 컴포넌트를 대신하여 보여줄 수 있는 컴포넌트입니다.<br>
Suspense 컴포넌트는 하위 컴포넌트들을 감싸고, fallback prop을 통해 로딩 중에 보여줄 컴포넌트나 UI를 지정할 수 있습니다.<br><br>
lazy 함수: 코드 스플리팅을 통해 컴포넌트의 번들 크기를 줄이기 위해 사용되는 함수입니다. lazy 함수는 동적으로 로딩할 컴포넌트를 지연 로딩(lazy loading)하기 위해 사용됩니다. lazy 함수로 생성된 컴포넌트는 Suspense 컴포넌트와 함께 사용될 수 있습니다.

### Swiper 사용법

1. Swiper 사이트에 들어갑니다. [링크](https://swiperjs.com/)
2. 우측 상단 Docs를 클릭해 Swiper에 대한 정보를 얻을 수 있습니다.
3. Resources의 Demo를 들어가면 예시 코드를 볼 수 있습니다.

- POSTMAN을 사용하여 API 개발 및 테스트 :
    Postman은 다양한 플랫폼에서 사용 가능하며, API 개발자, 테스터, 시스템 관리자 등 다양한 역할의 사용자들에게 API 테스트 및 관리 작업을 효과적으로 수행할 수 있는 강력한 도구로 평가받고 있습니다.

    `youtube API클릭`   
    `Search` -> `list` -> part: snippet / maxResults: 50 / -> `Excute` -> `showcode`      
    안에있는 key 값을 가져와 퍼스트맨의 Get에 넣어주고 기존에 받은 APIKEY값을 넣어준다.  

### 더보기 기능 :
1. 더 보기 버튼을 통하여 추가로 검색 결과를 불러오는 기능입니다. nextPageToken을 사용하여 페이지를 변경하고, 가져온 데이터를 이전에 있는 비디오 목록에 추가하였습니다.

2. [유튜브](https://rapidapi.com/Glavier/api/youtube-v311/)키 값을 가져옵니다.   
.env에 키 값을 안보이게 넣어주고  button을 만들어 안에 함수를 적용해줍니다.   
키 값안에 있는 nextPageToken 코드를 가져와서 더보기 기능을 수행합니다.

3. 상태 설정: const [videos, setVideos] = useState([]); : videos라는 상태 변수를 만들어 빈 배열로 초기화합니다. 이 배열은 유튜브에서 받아온 비디오 정보를 담습니다. const [nextpageToken, setNextPageToken] = useState(null); : nextpageToken이라는 상태 변수를 만들어 초기값을 null로 설정합니다. 이 변수는 다음 페이지의 토큰을 저장합니다.

4. API 요청 함수: fetchVideos 함수 : 유튜브 API에 검색어와 페이지 토큰을 전달하여 비디오 데이터를 가져오는 함수입니다. 가져온 데이터는 setVideos로 이전 데이터에 추가됩니다.

5. 페이지 변경 함수: handleLoadMore 함수 : "더 보기" 버튼을 클릭했을 때 호출되는 함수입니다. 현재 페이지 토큰이 있다면 fetchVideos 함수를 호출하여 다음 페이지의 비디오를 가져옵니다.

6. 렌더링: VideoSearch 컴포넌트 : 현재까지 가져온 비디오 데이터를 화면에 보여주는 역할을 하는 컴포넌트입니다.

7. "더 보기" 버튼 : 클릭하면 handleLoadMore 함수를 호출하여 다음 페이지의 비디오를 가져오도록 설정된 버튼입니다.

8. 컴포넌트 반환: return 문 : 페이지에는 검색 결과를 보여주는 VideoSearch 컴포넌트와 "더 보기" 버튼이 있는 부분이 렌더링됩니다.

### RapidAPI사용:
    RapidAPI는 다양한 웹 API에 액세스하고 이를 통합하며, API를 더 쉽게 찾고 사용할 수 있도록 도와주는 플랫폼입니다. 이 플랫폼은 개발자가 API를 손쉽게 탐색하고 사용할 수 있도록 API 호스팅 및 관리 서비스를 제공합니다.

1. https://rapidapi.com/hub
2. 검색: youtube v3 
3. X-RapidAPI-Key 받아오기

### youtube API: 
1. YouTube API는 YouTube의 데이터 및 기능에 프로그래밍적으로 접근할 수 있게 하는 API입니다. YouTube API를 사용하면 YouTube 동영상, 채널, 댓글 등과 관련된 정보를 읽고 쓸 수 있습니다. YouTube API는 개발자들이 사용자 지정 애플리케이션을 만들고 YouTube 플랫폼과 상호 작용할 수 있도록 하는 강력한 도구입니다.<br>
2. YouTube Data API: YouTube 동영상, 채널, 댓글 등과 관련된 데이터에 접근할 수 있습니다. 동영상 검색, 특정 채널의 동영상 목록 가져오기 등이 가능합니다.<br>
3. YouTube Analytics API: YouTube 채널 및 동영상의 통계 데이터에 접근할 수 있습니다. 조회수, 좋아요 수, 신규 구독자 수 등을 확인할 수 있습니다.<br>
4. YouTube Live Streaming API: YouTube 실시간 스트리밍 서비스와 상호 작용할 수 있습니다. 실시간 스트리밍의 시작 및 종료, 댓글 관리 등이 가능합니다.<br>
5. YouTube Player API: 웹 페이지에 YouTube 동영상을 삽입하고 커스터마이징할 수 있는 API입니다. 특정 동영상을 재생, 일시 중지, 볼륨 조절 등이 가능합니다.<br>
6. YouTube Reporting API: YouTube 데이터를 보고서로 다운로드할 수 있는 API입니다. 수익 보고서, 광고 성능 보고서 등을 얻을 수 있습니다<br>

### 검색기능 :
    
1. Search 컴포넌트를 사용하여 검색을 처리합니다. 사용자가 검색어를 입력하면 그에 따라 URL을 변경하여 새로운 경로로 이동하고 검색 결과를 표시합니다.<br>
    
2. 컴포넌트에서 상태값 searchKeyword를 사용하여 사용자가 입력한 검색어를 추적하고, setSearchKeyword를 통해 이 값을 변경합니다.<br>
    
3. handleSearch 함수는 검색어가 있을 때만 URL을 변경하도록 구현되어 있습니다. 검색어가 비어 있지 않으면 useNavigate hook을 사용하여 React Router의 navigate 함수를 호출하여 새로운 경로로 이동합니다. 그 후에 검색어 상태를 초기화하여 빈 문자열로 설정하여 사용자가 새로운 검색을 할 수 있도록 합니다.<br>
또한, Enter 키를 누르면 검색어를 가지고 handleSearch 함수가 호출되도록 onKeyDown 이벤트도 구현되어 있습니다. 이렇게 하면 사용자가 텍스트 입력 후 엔터를 누르거나 버튼을 클릭하여 검색할 수 있습니다.<br>
결론적으로, 사용자가 검색어를 입력하면 해당 검색어로 새로운 경로로 이동하고, 검색 결과를 표시합니다.<br>

## 트러블 슈팅
<details>
<summary>비디오 안나오는 error</summary>
해결방법(API문제):   
1. .env에서 api key 다시 체크
2. `https://rapidapi.com/Glavier/api/youtube-v311`  안되면 v31로 변경.
3. vs code 껏다 다시 키기.
</details>   

<details>
<summary>axios get 403 forbidden error</summary>
해결방법:   
1. 새로고침
2. 주소 더블 체크
3. 브라우저의 쿠키와 캐쉬 지우기
</details>   

<details>
<summary>API호출 404 에러</summary>
해결방법:   
1. api.js를 통해 호출시 base_url 끝 경로에 /가 붙어 api url를 호출하지 못함
</details> 

<details>
<summary>error: failed to push some refs to </summary>
원인: 위와 같은 에러는 원격저장소(github)에 내 로컬(내컴퓨터)에는 없는 파일이 있을 때 내 파일을 push를 하면 발생하는 오류.   
   
해결방법:   
1. 먼저 원격저장소에 파일을 내 로컬로 가져옵니다.
`git pull (원격저장소별칭 보통 origin이라고 함) main`

2. 이후에는 push가 가능해지므로 add -> commit -> push 순으로 수정사항을 반영하면 해결됩니다.
</details>




