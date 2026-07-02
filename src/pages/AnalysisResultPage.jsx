import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './AnalysisResultPage.css';

function AnalysisResultPage() {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
      <Navbar />
      
      {/* 이동 버튼을 제목 위 오른쪽 상단에 배치 */}
      <div className="header-section">
        <h1 className="main-title">피싱 위험도 정밀 분석</h1>
        <div className="nav-btn" onClick={() => navigate('/analysis/summary')}>
          정밀 분석 요약 보기 →
        </div>
      </div>
      
      <div className="analysis-container">
        <div className="original-text-box">
          <h3>제보된 텍스트 원문</h3>
        </div>

        <div className="result-grid">
          <div className="result-card">
            <div className="card-label">URL 위험도</div>
            <p className="card-text">비인가 도메인 및 유사 키워드('login', 'verify') 포함. 피싱 서버로 식별되었습니다.</p>
          </div>
          <div className="result-card">
            <div className="card-label">발신자 신뢰도</div>
            <p className="card-text">블랙리스트 번호 또는 해외 발신 번호 확인. 신뢰할 수 없는 발신자입니다.</p>
          </div>
          <div className="result-card">
            <div className="card-label">언어 패턴</div>
            <p className="card-text">기계적 번역 또는 사칭 기관 특유의 문구 패턴 분석 결과 사칭 시도 가능성 89%.</p>
          </div>
          <div className="result-card">
            <div className="card-label">긴급성 유도</div>
            <p className="card-text">'즉시 인증', '계정 정지' 등 심리적 압박을 통한 행동 유도 수위가 매우 높음.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalysisResultPage;