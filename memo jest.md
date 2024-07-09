# Jest 메모

## Axios를 mock하는 방법?
- 요약
  - `import axios from 'axios';`
  - `jest.mock('axios');`
  - 호출 테스트 전 `axios` 모듈에 대해 `.mockImplementation` 작성
  - `expect` 등으로 검증
- 호출 시 어떤 파라미터를 넘겼는지 테스트하기 위한 코드
  ```TypeScript
  import axios from 'axios';
  ...

  jest.mock('axios');
  ...

  describe('moduleName', () => {
    it('testName', async () => {
      const mockFn = jest.fn();
      axios.mockImplementationOnce(mockFn);
      await axios(...parameters);
      expect(mockFn).toHaveBeenCalledWith(...parameters);
    });
  });
  ```
- 호출 시 응답을 내놨는지 테스트하기 위한 코드
  ```TypeScript
  import axios from 'axios';
  ...

  jest.mock('axios');
  ...

  describe('moduleName', () => {
    it('testNameForGoodResponse', async () => {
      axios.mockImplementationOnce((...parameters) => Promise.resolve({ data: {...} }));
      ...
    });

    it('testNameForBadResponse', async () => {
      axios.mockImplementationOnce((...parameters) => Promise.reject({ data: {...} }));
      ...
    });
  });
  ```
- 근거: https://stackoverflow.com/questions/45016033/how-do-i-test-axios-in-jest
