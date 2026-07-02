import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './ReportPage.css';
import { IoCallOutline, IoChatbubbleOutline, IoMailOutline } from 'react-icons/io5';
import ReportSection from '../components/ReportSection';

// ... 상단 import 부분은 동일합니다

function ReportPage() {
  const navigate = useNavigate();

  const goToDetail = (type) => {
    navigate('/report/main', { state: { reportType: type } });
  };

  return (
    <div className="report-container">
      <Navbar />
      <h1>사용자 제보 및 피싱 경험담</h1>
      
      <div className="card-container">
        {/* 카드 1: 전화 */}
        <div className="report-card" onClick={() => goToDetail('전화')}>
          <IoCallOutline className="card-icon" /> {/* 아이콘 추가 */}
          <div className="card-title">전화</div>
          <div className="card-desc">전화통화, ARS 통화로 기관/대출/수사 등을 받은 경우</div>
        </div>

        {/* 카드 2: 문자 */}
        <div className="report-card" onClick={() => goToDetail('문자')}>
          <IoChatbubbleOutline className="card-icon" /> {/* 아이콘 추가 */}
          <div className="card-title">문자(URL 포함)</div>
          <div className="card-desc">문자로 인증번호 및 결제 안내를 받거나 URL이 포함된 경우</div>
        </div>

        {/* 카드 3: 이메일 */}
        <div className="report-card" onClick={() => goToDetail('이메일')}>
          <IoMailOutline className="card-icon" /> {/* 아이콘 추가 */}
          <div className="card-title">이메일(URL 포함)</div>
          <div className="card-desc">이메일로 인증번호 및 결제 안내를 받거나 URL이 포함된 경우</div>
        </div>
      </div>
    </div>
  );
}

export default ReportPage;