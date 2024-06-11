# NextM
- 마블 API를 이용하여 Next.js 14를 조금 더 효과적으로 학습하기 위해 만들어진 프로젝트.

## 태스크 브레이크다운
- 환경 설정
  - 환경변수 세팅
- 각종 타입 정의하기
  - https://developer.marvel.com/documentation/entity_types 에 해당하는 타입
  - https://developer.marvel.com/docs 의 각 response에 들어간 타입
- 마블 API 통신 로직 만들기
  - 각종 파라미터와 응답 타입 정의
  - 참고: API 목록 문서 (https://developer.marvel.com/docs)
- 페이지 만들기
  - 캐릭터 페이지
    - 캐릭터 검색 (`/characters`)
    - 캐릭터 상세 (`/characters/{characterId}`)
      - 캐릭터 등장 코믹스
      - 캐릭터 등장 시리즈
      - 캐릭터 등장 스토리
  - 코믹스 페이지
    - 코믹스 검색 (`/comics`)
    - 코믹스 상세 (`/comics/{comicId}`)
      - 코믹스 내 캐릭터
      - 코믹스 스토리
  - 시리즈 페이지
    - 시리즈 검색 (`/series`)
    - 시리즈 상세 (`/series/{seriesId}`)
      - 시리즈 등장 캐릭터
      - 시리즈 내 코믹스
      - 시리즈 내 스토리
  - 스토리 페이지
    - 스토리 목록 (필터링 가능한 리스트) (`/stories`)
    - 스토리 상세 (`/stories/${storyId}`)
      - 스토리 해당 캐릭터
      - 스토리 해당 코믹스
      - 스토리 해당 시리즈
- 페이지에 필요한 컴포넌트 만들기
  - NextM 로고 (`NextMLogo`)
  - 인풋
    - 검색 인풋 (`SearchInput`)
    - 단일 라디오 모음 (`RadioSelection`)
    - 다중 체크박스 모음 (`CheckSelection`)
    - 콤보박스 (`ComboSelection`)
    - 버튼 (`Button`)
  - 텍스트
    - 타이틀 (`Title`)
    - 부제목 (`SubTitle`)
    - 문단 (`Paragraph`)
    - 최근 수정된 시각 (`LastModified`)
  - 이미지
    - 썸네일 이미지 (`ThumbnailImage`)
    - 풀 사이즈 이미지 (`FullSizeImage`)
  - 컨텐츠 템플릿
    - 요약 (`Summary`)
      - 캐릭터 요약 (`CharacterSummary`)
      - 코믹스 요약 (`ComicsSummary`)
      - 시리즈 요약 (`SeriesSummary`)
      - 스토리 요약 (`StorySummary`)
    - 아티클 (`Article`)
      - 캐릭터 아티클 (`CharacterArticle`)
      - 코믹스 아티클 (`ComicsArticle`)
      - 시리즈 아티클 (`SeriesArticle`)
      - 스토리 아티클 (`StoryArticle`)
  - 리스트
    - 캐릭터 리스트 (`CharacterList`)
    - 코믹스 리스트 (`ComicsList`)
    - 시리즈 리스트 (`SeriesList`)
    - 스토리 리스트 (`StoryList`)
  - 레이아웃
    - 헤더 (`Header`)
      - 캐릭터, 코믹스, 시리즈, 스토리 중 원하는 곳으로 이동할 수 있게 해주는 네비게이션 (`Navigation`)
    - 본문 영역 (`Body`)
    - 푸터 (`Footer`)
      - 반드시 `Data provided by Marvel. © 2014 Marvel`이 보이도록 해야 함 (근거: https://developer.marvel.com/documentation/attribution)
- 오류 시 안내 만들기
  - 404 Not Found (찾고자 하는 데이터가 없는 경우) (`404ErrorIndicator`)
  - 429 Too Many Requests (금일 사용한 API 사용 횟수가 소진되었을 경우) (`429ErrorIndicator`)
  - 그 외 에러가 있을 경우 (`OtherErrorIndicator`)

## 이 프로젝트에서는 FSD를 시도함
- FSD(Feature-Sliced Design)란?
  - 프론트엔드 전용 아키텍처 중 하나. 모듈 간의 느슨한 결합과 높은 응집력을 제공하고 쉽게 확장할 수 있는 구조를 의도했다고 한다. 즉, 코드베이스를 조직화하고, 모듈화되고 유지보수에도 용이한, 확장성 높은 아키텍처를 촉진시키도록 설계했다고 볼 수 있다.
  - FSD는 레이어(Layer), 슬라이스(Slice), 세그먼트(Segment)의 세 가지 단계로 나뉜다고 한다.
    - 레이어(Layer)
      - 설명: 앱 구조 분해의 첫번째 단계이자, app > processes > pages > widgets > features > entities > shared 순의 계급으로 엄격한 상하관계를 가진 단계. (각 모듈은 자기 자신보다 낮은 계급에 있는 모듈만 사용 가능하다는 의미)
      - 앱(app)
        - 애플리케이션 로직이 시작되는 모듈.
        - 프로바이더, 라우터, 전역 스타일, 전역 타입 선언 등이 여기에서 정의된다.
        - 엔트리 포인트 역할을 한다.
      - 프로세스(processes)
        - 여러 페이지에 걸친 시나리오를 처리하는 모듈.
        - Depricated 되었고, 선택적(optional)임.
      - 페이지(pages)
        - 여러 위젯, 피쳐, 엔티티가 유기적으로 모여 하나의 화면을 이루는 모듈.
      - 위젯(widgets)
        - 여러 피쳐와 엔티티가 유기적으로 모여 하나의 의미를 가지게 되는 모듈.
        - 예: 이슈 리스트, 유저 프로필 등등
      - 피쳐(features)
        - 비즈니스 관점에서 유효한 유저 상호작용이나 조치로 이루어진 모듈.
        - 예: 댓글 달기, 상품 장바구니에 담기, 유저 검색하기 등등
        - 선택적(optional)임.
      - 엔티티(entities)
        - 비즈니스적인 의미를 가지는 모듈.
        - 예: 유저, 상품, 주문, 댓글 등등
        - 선택적(optional)임.
      - 공동(shared)
        - 어떤 비즈니스 로직에도 종속되지 않는 계급.
        - 예: UI, 라이브러리, API 등등.
        - 재사용성이 높다.
    - 슬라이스(Slice)
      - 레이어 단계가 비즈니스 도메인으로 더 세분화되는 단계.
      - 슬라이스는 동일 레이어 계급의 타 슬라이스를 사용할 수 없다.
    - 세그먼트(Segment)
      - 슬라이스 단계가 기술적인 도메인으로 더 세분화되는 단계.
      - UI, 모델(스토어나 액션), API, 라이브러리 등이 대표적인 세그먼트이다.
  - (근거 1: https://feature-sliced.design/docs/get-started/overview)
  - (근거 2: https://emewjin.github.io/feature-sliced-design/)
- 왜 이걸 시도하는가?
  - 기존에 사용하던 [Atomic Design Pattern](https://feature-sliced.design/docs/about/alternatives#applicability-to-frontend)은 UI 컴포넌트와 그 조합에 초점이 맞추어져 있어, 컴포넌트가 비즈니스 측면에서 어떤 역할을 하는지 알기 어렵다는 단점이 있어, 구조적인 개선이 필요했다.
  - 그래서 Atomic Design Pattern과 유사하면서도 각 컴포넌트의 비즈니스적인 역할까지 알아볼 수 있는 FSD를 시도해보고자 한다.
  - (근거: https://feature-sliced.design/docs/about/alternatives#applicability-to-frontend)
- Next.js App Router에서 어떻게 FSD를 사용할 수 있을까?
  - 초기에 src/app이 있는 경우, src/app -> app으로 변경한다. src/app은 루트에 app이 있는 경우 무시되기 때문에, FSD를 활용하고 싶으면 src/app 폴더를 루트에 옮긴다.
  - 이 때, Tailwind CSS를 사용 중이라면, tailwind.config.ts의 content section을 재설정해야 한다.
    ```TypeScript
    const config: Config = {
      content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
      ],
      ...,
    };
    ```
    (참고: https://tailwindcss.com/docs/content-configuration)
  - 그 외에도, TypeScript의 path aliasing 등등에 설정해줄 필요가 있으면 해둔다.
  - (근거 1: https://feature-sliced.design/docs/guides/tech/with-nextjs#app-router)
  - (근거 2: https://nextjs.org/docs/pages/building-your-application/configuring/src-directory)
