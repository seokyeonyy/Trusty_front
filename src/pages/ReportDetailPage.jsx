//입력하는 곳
// src/pages/ReportDetailPage.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './ReportDetailPage.css'; // 상세 페이지용 CSS도 따로 만드세요

function ReportDetailPage() {
  const location = useLocation();
  // Main에서 넘겨준 state를 받습니다.
  const { reportType } = location.state || { reportType: '전화' };

  return (
    <div className="report-detail-container">
      <Navbar />
      <h1>제보 상세 정보 입력</h1>
      <p>현재 선택된 제보 유형: <strong>{reportType}</strong></p>
      
      {/* 여기에 아까 만든 입력 폼(텍스트 에어리어, 파일 업로드 등)을 넣으세요 */}
      <div className="input-box">
        <textarea placeholder={`${reportType} 관련 내용을 입력하세요`} />
      </div>
    </div>
  );
}

export default ReportDetailPage;