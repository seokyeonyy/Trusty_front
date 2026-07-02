// src/api/api.js (수정본)
export const login = async (userData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        data: { 
          message: "로그인 성공!",
          accessToken: "fake-jwt-token-12345", // 이 값을 추가하세요!
          user: { name: "테스트유저", email: userData.email } 
        }
      });
    }, 1000);
  });
};