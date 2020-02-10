// @flow

import loading, {
  START_LOADING,
  FINISH_LOADING,
  startLoading,
  finishLoading,
} from '../loading';

describe('리듀서: loading 테스트', () => {
  const TEST_TYPE = 'TEST_TYPE';
  const startLoadingAction = startLoading({ type: TEST_TYPE });
  const finishLoadingAction = finishLoading({ type: TEST_TYPE });

  test('액션생성이 정상 동작해야 함', () => {
    expect(startLoadingAction.type).toBe(START_LOADING);
    expect(finishLoadingAction.type).toBe(FINISH_LOADING);
    expect(startLoadingAction.payload.type).toBe(TEST_TYPE);
    expect(finishLoadingAction.payload.type).toBe(TEST_TYPE);
  });

  describe('리듀서가 정상 동작해야 함', () => {
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
});
