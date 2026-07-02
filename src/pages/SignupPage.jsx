import React from 'react';
import './SignupPage.css'; 

function SignupPage() {
  return (
    <div className="signup-container">
      <h1>회원가입</h1>
      <input type="text" placeholder="아이디" />
      <input type="password" placeholder="비밀번호" />
      <input type="password" placeholder="비밀번호 확인" />
      <input type="email" placeholder="이메일" />
      <button className="signup-btn">가입 완료</button>
    </div>
  );
}

export default SignupPage;