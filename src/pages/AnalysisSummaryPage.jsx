import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './AnalysisSummaryPage.css';

function AnalysisSummaryPage() {
  const navigate = useNavigate();

  return (
    <div className="summary-container">
      
      {/* 1. 상단 지표 영역 */}
      <div className="indicators-wrapper">
        {['URL 위험도', '언어 패턴', '발신자 신뢰도', '긴급성 유도'].map((title) => (
          <div key={title} className="indicator-card">
            <span className="indicator-title">{title}</span>
          </div>
        ))}
      </div>

      {/* 2. 하단 상세 분석 결과 */}
      <div className="result-box">
        <div className="result-title">피싱 위험도 분석 결과</div>
        
        <div className="back-link" onClick={() => navigate('/analysis/result')}>
          ← 기본 분석 창으로
        </div>

        <div className="section-label" style={{ top: "115px" }}>상세 분석 요약</div>
        <div className="section-label" style={{ top: "315px", color: "#FFCC33" }}>권장 조치 사항</div>
      </div>
      
      <Navbar />
    </div>
  );
}

export default AnalysisSummaryPage;