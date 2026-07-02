import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './ReportMainPage.css'; // 상세 입력 페이지 전용 CSS

function ReportMainPage() {
  const location = useLocation();
  // ReportPage에서 넘어온 state를 받습니다.
  const initialType = location.state?.reportType || '전화';
  
  const [reportData, setReportData] = useState({
    type: initialType,
    details: '',
    file: null
  });

  const handleSubmit = () => {
    console.log("백엔드로 보낼 데이터:", reportData);
    alert(`${reportData.type} 제보가 완료되었습니다!`);
  };

  return (
    <div className="report-main-container">
      <Navbar />
      <h1>제보 상세 정보 입력</h1>
      <p>현재 선택된 유형: <strong>{reportData.type}</strong></p>

      {/* 입력 폼 영역 */}
      <div className="input-section">
        <label>이메일/문자 내 링크/IP 주소</label>
        <textarea 
          className="detail-input"
          placeholder={`${reportData.type} 관련 내용을 입력하세요`}
          onChange={(e) => setReportData({ ...reportData, details: e.target.value })}
        />

        <label>통화/문자 내역 캡처</label>
        <div className="drop-zone">
          <p>파일 드래그 또는 선택</p>
          <input type="file" id="file" style={{ display: 'none' }} 
                 onChange={(e) => setReportData({ ...reportData, file: e.target.files[0] })} />
          <label htmlFor="file" className="file-btn">파일 찾기</label>
        </div>
        
        <button className="submit-btn" onClick={handleSubmit}>제보하기</button>
      </div>
    </div>
  );
}

export default ReportMainPage;;