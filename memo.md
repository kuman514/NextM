# Next.js 14 메모
Next.js 14에 대해 몰랐거나 잘못 알고 있는 사항을 보완하기 위해 만듦.

## Next.js 14에서 새로 추가된 기능
- 새로 추가된 기능
  - 터보팩 (Turbopack)
    - Next.js 컴파일러 터보차지?
    - Next.js 14 발표 기준
      - `next dev`로 실행되는 로컬 개발 환경에서 시동이 53.3% 더 빨리 걸리고, 코드 업데이트 시 발생하는 Fast Refresh가 94.7% 더 빨라진다고 함.
      - 아직은 개발 중인 단계라 (`next dev`는 90% 테스트 통과됨), vercel.com에 올린 테스트에서 전부 통과하면 stable release로 옮기겠다고 함.
      - 근거: https://nextjs.org/blog/next-14#nextjs-compiler-turbocharged
    - 최근 (Next.js 14.2 발표 기준)
      - 99.8%의 통합 테스트를 통과했다고 함.
      - 로컬 개발 환경에서 시동이 76.7% 더 빨라짐.
      - 코드 업데이트 시 발생하는 Fast Refresh가 96.3% 더 빨라짐.
      - 캐싱 없이 초기 라우트 컴파일(initial route compile)이 45.8% 더 빨라짐.
      - 근거: https://nextjs.org/blog/next-14-2#turbopack-for-development-release-candidate
    - 지금 당장은 `next dev --turbo`로 알아볼 수 있을 듯?
  - 서버 액션 (Server Actions)
    - API 엔드포인트(API Route)를 생성하지 않고도 React 컴포넌트 내에서 DB 조작 등의 서버에서의 뮤테이션을 직접 호출할 수 있게 해주는 기능.
    - 서버 액션을 정의하기 위해선 `'use server'`를 인라인으로 함수 내부 최상단 또는 별개의 파일로 분리한 액션 파일의 최상단에 추가해야 한다.
    - 예시 코드
      ```TSX
      export default function Page() {
        async function create(formData: FormData) {
          'use server';
          const id = await createItem(formData);
        }

        return (
          <form action={create}>
            <input type="text" name="name" />
            <button type="submit">Submit</button>
          </form>
        );
      }
      ```
    - 근거: https://nextjs.org/blog/next-14#server-actions-stable
  - 부분 렌더링 (Partial Rendering) (추가적인 메모 예정)
- 참고
  - https://nextjs.org/blog/next-14
  - https://nextjs.org/blog/next-14-1
  - https://nextjs.org/blog/next-14-2
  - https://yozm.wishket.com/magazine/detail/2324/

## 서버 컴포넌트와 클라이언트 컴포넌트 (추가적인 메모 예정)
- 서버 컴포넌트 (추가적인 메모 예정)
  - 서버에서만 렌더링되는 컴포넌트
  - ❌ 유저 인터랙티비티 제공 불가
  - ❌ useState(), useReducer(), useEffect()와 같은 state / effects 사용 불가
  - ❌ DOM과 같은 브라우저 api 사용 불가
  - ❌ state / effects / 브라우저 api 사용하는 커스텀 훅 사용 불가
  - ✅ 데이터베이스 / 내부 서비스 / 파일시스템과 같은 server-only 데이터 사용 가능
  - ✅ 서버 컴포넌트 / 클라이언트 컴포넌트 / native elements (예: div, span) 임포트 및 렌더링 가능
  - ✅ 클라이언트 컴포넌트 props로 serializable한 데이터 전달 가능
- 클라이언트 컴포넌트 (추가적인 메모 예정)
  - 서버 컴포넌트 도입 전 리액트 컴포넌트
  - 클라이언트에서 렌더링 되거나 SSR을 통해 서버에서 렌더링 되는 컴포넌트
  - ✅ 유저 인터랙션 사용 가능
  - ✅ state / effects / 브라우저 api 사용 가능
  - ❌ 서버 컴포넌트 임포트 불가
    - ✅ 다만 서버 컴포넌트는 클라이언트 컴포넌트에게 또 다른 서버 컴포넌트를 자식으로 넘겨주는 건 가능
      예) <ClientTabBar><ServerTabContent /></ClientTabBar>
  - ❌ server-only 데이터 사용 불가
- 근거
  - https://nextjs.org/docs/app/building-your-application/rendering/server-components
  - https://nextjs.org/docs/app/building-your-application/rendering/client-components
  - https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns
  - https://tech.kakaopay.com/post/react-server-components/#%EC%84%9C%EB%B2%84-%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8-%EA%B7%B8%EB%A6%AC%EA%B3%A0-%EA%B3%B5%EC%9C%A0-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8
