import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './CommunityPage.css';

function CommunityPage() {
  const [activeTab, setActiveTab] = useState('그룹 활동');
  const tabs = ['그룹 활동', '제보 내역', '뉴스창', 'MY'];

  return (
    <div className="community-container">
      <img className="banner-img" src="https://placehold.co/1456x377" alt="community banner" />

      <div className="content-area">
        {/* 좌측 콘텐츠 */}
        <div style={{ position: "absolute", left: "28px" }}>
          <div style={{ fontSize: "32px", fontWeight: 600 }}>피싱 경험 공유방</div>
          
          <div className="tab-menu">
            {tabs.map(tab => (
              <div 
                key={tab} 
                className={`tab-item ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>

        {/* 우측 사이드바 */}
        <div className="sidebar">
          <input className="sidebar-search" placeholder="검색" />
          <div style={{ marginTop: "50px" }}>
            <div className="sidebar-link">제보창</div>
            <div className="sidebar-link">뉴스</div>
            <div className="sidebar-link">피싱경험 제보창</div>
          </div>
        </div>
      </div>

      <Navbar />
    </div>
  );
}

export default CommunityPage;