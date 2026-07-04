// src/pages/LoginPage.jsx
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext'; // 만들어둔 컨텍스트 가져오기
import apiClient from '../api/axios';

function LoginPage() {
  const { setIsLoggedIn } = useContext(AuthContext); // 전역 상태 가져오기
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await apiClient.post('/auth/login', { email, password });
      
      // 1. 토큰 저장
      localStorage.setItem('accessToken', response.data.access_token);
      
      // 2. 전역 로그인 상태를 true로 변경 (이렇게 하면 App 전체가 로그인 상태를 알게 됨)
      setIsLoggedIn(true); 
      
      alert("로그인 성공!");
    } catch (error) {
      alert("로그인 실패");
    }
  };

  return (
    <div>
      <input onChange={(e) => setEmail(e.target.value)} placeholder="이메일" />
      <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="비밀번호" />
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
}

export default LoginPage;0