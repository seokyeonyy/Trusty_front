import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="login-wrapper">
      <h1 className="login-title">로그인</h1>
      
      {/* 입력창과 버튼을 감싸는 컨테이너 */}
      <div className="login-form">
        <div className="input-group">
          <input className="login-input" placeholder="아이디" />
          <input className="login-input" type="password" placeholder="비밀번호" />
        </div>
        <button className="login-btn">로그인</button>
      </div>

      <div className="login-footer" onClick={() => navigate('/signup')}>
        회원가입
      </div>
    </div>
  );
}
export default LoginPage;