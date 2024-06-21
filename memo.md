# Next.js 14 메모
Next.js 14에 대해 몰랐거나 잘못 알고 있는 사항을 보완하기 위해 만듦.

## Next.js 14에서 새로 추가된 기능 (추가적인 메모 예정)
- 새로 추가된 기능
  - 터보팩 (Turbopack)
    - Next.js 컴파일러 터보차지?
    - `next dev`로 실행되는 로컬 개발 환경에서
      - 시동이 53.3% 더 빨리 걸리고
      - 코드 업데이트 시 발생하는 Fast Refresh가 94.7% 더 빨라진다고 함
    - 아직은 개발 중인 단계라 (`next dev`는 90% 테스트 통과됨), vercel.com에 올린 테스트에서 전부 통과하면 stable release로 옮기겠다고 함
      - `next dev --turbo`로 알아볼 수 있을 듯?
  - 서버 액션 (Server Actions)
  - 부분 렌더링 (Partial Rendering)
- 근거
  - https://nextjs.org/blog/next-14
  - https://nextjs.org/blog/next-14-1
  - https://nextjs.org/blog/next-14-2
  - https://yozm.wishket.com/magazine/detail/2324/

## 서버 컴포넌트와 클라이언트 컴포넌트 (추가적인 메모 예정)
- 서버 컴포넌트 (추가적인 메모 예정)
- 클라이언트 컴포넌트 (추가적인 메모 예정)
- 서버 컴포넌트와 클라이언트 컴포넌트의 차이 (추가적인 메모 예정)
- 근거
  - https://nextjs.org/docs/app/building-your-application/rendering/server-components
  - https://nextjs.org/docs/app/building-your-application/rendering/client-components
  - https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns
