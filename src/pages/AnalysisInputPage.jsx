import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './AnalysisInputPage.css';

function AnalysisInputPage() {
  const navigate = useNavigate();
  const [inputText, setInputText] = useState('');

  const handleAnalysis = () => {
    // 백엔드로 텍스트를 보내거나, 다음 페이지로 데이터를 전달
    console.log("분석할 내용:", inputText);
    navigate('/analysis/result', { state: { text: inputText } });
  };

  return (
    <div className="analysis-input-container">
      <div className="input-bg-box"></div>
      
      <div style={{ left: "207px", top: "330px", position: "absolute", fontSize: "32px", fontFamily: "Anonymous Pro" }}>피싱 분석 도구</div>
      <div style={{ width: "984px", left: "207px", top: "383px", position: "absolute", fontSize: "24px" }}>
        입력하신 텍스트나 이메일 내용을 실시간으로 검토하여 위험도를 분석합니다.
      </div>

      <div style={{ left: "207px", top: "506px", position: "absolute", fontSize: "32px" }}>분석할 내용을 입력하세요</div>
      
      {/* 텍스트 입력창 */}
      <textarea 
        className="textarea-field"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="피싱이 의심되는 내용을 여기에 붙여넣으세요."
      />
      
      <div className="analyze-btn" onClick={handleAnalysis}>
        <span>분석하기</span>
      </div>
      
      <Navbar />
    </div>
  );
}

export default AnalysisInputPage;