import user, { userLogin, userLogout } from '../user';

describe('리듀서: user 테스트', () => {
  let state = user(undefined, {});

  test('초기 상태를 반환해야 함', () => {
    expect(state.isLoggedIn).toBeFalsy;
    expect(Object.entries(state.user)).toHaveLength(0);
    expect(state.user.constructor).toBe(Object);
  });

  test('사용자가 로그인 한 상태를 반환해야 함', () => {
    state = user(
      state,
      userLogin({
        user: {
          name: 'TEST_NAME',
          profile: 'TEST_PROFILE',
        },
      }),
    );

    expect(state.isLoggedIn).toBeTruthy;
    expect(state.user).toHaveProperty('name', 'TEST_NAME');
    expect(state.user).toHaveProperty('profile', 'TEST_PROFILE');
  });

  test('사용자가 로그아웃 한 상태를 반환해야 함', () => {
    state = user(state, userLogout());

    expect(state.isLoggedIn).toBeFalsy;
    expect(Object.entries(state.user)).toHaveLength(0);
    expect(state.user.constructor).toBe(Object);
  });
});
