import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './ReportPage.css';

function ReportPage() {
  const navigate = useNavigate();

  const goToDetail = (type) => {
    navigate('/report/main', { state: { reportType: type } });
  };

  return (
    <div className="report-container">
      <Navbar />
      <h1>사용자 제보 및 피싱 경험담</h1>
      
      {/* 제공해주신 .card-container 클래스 적용 */}
      <div className="card-container">
        
        {/* 카드 1: 전화 */}
        <div className="report-card" onClick={() => goToDetail('전화')}>
          <div className="card-title">전화</div>
          <div className="card-desc">전화통화, ARS 통화로 기관/대출/수사 등을 받은 경우</div>
        </div>

        {/* 카드 2: 문자 */}
        <div className="report-card" onClick={() => goToDetail('문자')}>
          <div className="card-title">문자(URL 포함)</div>
          <div className="card-desc">문자로 인증번호 및 결제 안내를 받거나 URL이 포함된 경우</div>
        </div>

        {/* 카드 3: 이메일 */}
        <div className="report-card" onClick={() => goToDetail('이메일')}>
          <div className="card-title">이메일(URL 포함)</div>
          <div className="card-desc">이메일로 인증번호 및 결제 안내를 받거나 URL이 포함된 경우</div>
        </div>
        
      </div>
    </div>
  );
}

export default ReportPage;