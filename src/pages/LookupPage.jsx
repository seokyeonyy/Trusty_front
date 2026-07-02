import React, { useState } from 'react';
import './LookupPage.css'; // CSS 파일 불러오기

function LookupPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="lookup-container">
      <div className="title-text">피싱 이력 조회</div>
      
      {/* 검색창을 input으로 교체 */}
      <input 
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="이메일 또는 휴대폰 번호를 입력하세요"
      />
      
      {/* 검색 버튼 */}
      <button className="search-btn" onClick={() => console.log(searchTerm)}>
        검색
      </button>

      {/* 결과 리스트 예시 (백엔드 연동 시 .map 사용) */}
      <div style={{ position: "absolute", top: "796px", left: "58px" }}>
        <div className="result-item">user@example.com - 위험</div>
        <div className="result-item">010-1234-5678 - 안전</div>
      </div>
    </div>
  );
}

export default LookupPage;