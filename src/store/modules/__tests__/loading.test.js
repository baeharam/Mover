import loading, { startLoading, finishLoading } from '../loading';

describe('리듀서: loading 테스트', () => {
  const TEST_TYPE = 'TEST_TYPE';
  let state = loading(undefined, {});

  test('초기 상태를 반환해야 함', () => {
    expect(Object.entries(state)).toHaveLength(0);
    expect(state.constructor).toBe(Object);
  });

  test('로딩이 참인 상태를 반환해야 함', () => {
    state = loading(state, startLoading({ type: TEST_TYPE }));
    expect(state[TEST_TYPE]).toBeTruthy;
  });

  test('로딩이 거짓인 상태를 반환해야 함', () => {
    state = loading(state, finishLoading({ type: TEST_TYPE }));
    expect(state[TEST_TYPE]).toBeFalsy;
  });
});
