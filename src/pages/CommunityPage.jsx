import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './CommunityPage.css';

function CommunityPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('group');
  const fileInputRef = useRef(null);

  const [selectedPost, setSelectedPost] = useState(null);
  const [commentInput, setCommentInput] = useState('');
  const [postComments, setPostComments] = useState({
    1: [
      { id: 1, author: '보안전문가', text: '이런 수법 진짜 조심해야 합니다.', time: '1시간 전' },
      { id: 2, author: '클린인터넷', text: 'Trusty로 검증하는 습관 필수입니다!', time: '40분 전' },
    ],
    2: [],
  });

  useEffect(() => {
    if (location.state?.fromNavbar) {
      setActiveTab('group');
      setSelectedPost(null);
    }
  }, [location.state]);

  const [inputText, setInputText] = useState('');
  const [groupPosts, setGroupPosts] = useState([
    { id: 1, name: '피싱헌터', handle: '@phishing_hunter', time: '6월 29일', content: '신종 카톡 피싱 주의!', hasChat: true, likeCount: 42000, liked: false },
    { id: 2, name: '화이트해커', handle: '@whitehat_korea', time: '25분 전', content: '국민건강보험 사칭 메세지 주의하세요.', hasChat: false, likeCount: 340, liked: false },
  ]);

  // ... (기존 핸들러 함수들: handlePostSubmit, handleLikeToggle, handleCommentSubmit, handleReportClick, formatLikeCount 등은 동일하게 유지)

  const renderTabContent = () => {
    switch (activeTab) {
      case 'group':
        return selectedPost ? (
          <div className="community-page__detail">
            <div className="community-page__back-link" onClick={() => setSelectedPost(null)}>← 목록으로</div>
            <div className="community-page__detail-card">
              <div className="community-page__post-meta">{selectedPost.name} {selectedPost.handle} · {selectedPost.time}</div>
              <div className="community-page__post-content">{selectedPost.content}</div>
              <div className="community-page__post-footer">
                <span className={`community-page__like ${selectedPost.liked ? 'community-page__like--active' : ''}`} onClick={() => handleLikeToggle(selectedPost.id)}>
                  {selectedPost.liked ? '❤️' : '🖤'} 좋아요 {selectedPost.likeCount}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="community-page__feed">
            <div className="community-page__composer">
              <input type="text" placeholder="공유하고 싶은 내용을 입력하세요." value={inputText} onChange={(e) => setInputText(e.target.value)} className="community-page__composer-input" />
              <div className="community-page__composer-actions">
                <button className="community-page__attach-btn" onClick={() => fileInputRef.current.click()}>파일 첨부</button>
                <input type="file" ref={fileInputRef} className="community-page__hidden-input" onChange={(e) => alert(`${e.target.files[0]?.name} 추가됨`)} />
                <button className="community-page__post-btn" onClick={handlePostSubmit}>게시하기</button>
              </div>
            </div>
            {groupPosts.map((post) => (
              <div key={post.id} className="community-page__post" onClick={() => setSelectedPost(post)}>
                <div className="community-page__post-meta">{post.name} {post.handle}</div>
                <div className="community-page__post-content">{post.content}</div>
              </div>
            ))}
          </div>
        );
      case 'reports':
        return <div className="community-page__list-panel"><h3>제보 내역</h3>{/* 목록 매핑 */}</div>;
      // ... news, my 케이스 동일
      default: return null;
    }
  };

  return (
    <div className="page-viewport">
      <div className="community-page">
        <Navbar />
        <div className="community-page__layout">
          <div className="community-page__main">
            <div className="community-page__title">피싱 경험 공유방</div>
            <div className="community-page__tab-content">{renderTabContent()}</div>
          </div>
          <div className="community-page__sidebar">
            {/* 사이드바 UI 구조 */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default CommunityPage;