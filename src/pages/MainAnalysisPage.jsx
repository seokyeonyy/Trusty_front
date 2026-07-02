import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './MainAnalysisPage.css';

function MainAnalysisPage() {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <div className="content-box" />
      
      <div className="title-text">LLM 기반 최첨단 피싱 감지 시스템</div>
      <div className="description-text">
        텍스트와 이메일 내용을 입력하면, URL 위험도, 언어 패턴, 발신자 신뢰도, 긴급성까지 
        종합적으로 분석하여 24/7 실시간 피싱 위험도를 평가합니다.
      </div>
      
      <div className="start-btn" onClick={() => navigate('/analysis/input')}>
        <span style={{ fontSize: "28px" }}>분석 시작하기</span>
      </div>
      
      <img className="main-image" src="https://placehold.co/704x469" alt="main" />
      <Navbar />
    </div>
  );
}
export default MainAnalysisPage;