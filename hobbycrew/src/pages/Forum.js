import React, { useState } from 'react';
import MenuBar from '../components/MenuBar'; // 하단 네비게이션
import './Forum.css';
import { useNavigate } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
import { IoClose } from 'react-icons/io5'; // 삭제 버튼 아이콘 추가

const Forum = () => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCrew, setFilteredCrew] = useState([]); // 검색된 결과 저장
  const [recentSearches, setRecentSearches] = useState([]); // 최근 검색어 저장
  const [showDropdown, setShowDropdown] = useState(false); // 드롭다운 표시 여부

  const crewList = [
    { name: 'Crew Alpha', image: 'url_to_image1' },
    { name: 'Crew Beta', image: 'url_to_image2' },
    { name: 'Crew Gamma', image: '' },  // 이미지 없음
    { name: 'Crew Delta', image: 'url_to_image4' },
  ];

  const popularList = [
    { name: 'Popular Crew 1', image: 'url_to_image1' },
    { name: 'Popular Crew 2', image: 'url_to_image2' },
    { name: 'Popular Crew 3', image: 'url_to_image3' },
    { name: 'Popular Crew 4', image: 'url_to_image4' },
    { name: 'Popular Crew 4', image: 'url_to_image4' },
  ];

 // 검색어 입력 처리 함수
   // 검색어 입력 처리 함수
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    setShowDropdown(true); // 검색창 클릭 시 드롭다운 열기
  };

  // 검색 버튼 클릭 시 필터링 로직
  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      setFilteredCrew([]);
    } else {
      const results = crewList.filter((crew) =>
        crew.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCrew(results);

      // 최근 검색어 추가 (중복 제거)
      setRecentSearches((prev) => {
        const updatedSearches = [searchQuery, ...prev.filter(item => item !== searchQuery)];
        return updatedSearches.slice(0, 5); // 최대 5개 저장
      });
    }
    setShowDropdown(false); // 검색 후 드롭다운 닫기
  };

  // 엔터키로 검색
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  // 최근 검색어 삭제 함수
  const handleDeleteRecentSearch = (search) => {
    setRecentSearches((prev) => prev.filter((item) => item !== search));
  };

  // 드롭다운 닫기
  const handleCloseDropdown = () => {
    setShowDropdown(false);
  };

  

  return (
    <div className="forum-container">
      <div className="forum-form">
        <header className="header">
          <h1
            className="fontLogo"
            onClick={() => navigate('/home')}
          >
            HOBBYCREW
          </h1>
          <button className="post-button">
            <MdNavigateNext className="post-icon" />
            <span className="post-text">모집글 등록</span>
          </button>
        </header>

        <section className="form-group">
          <div className="search-bar">
            <button className="search-button" onClick={handleSearch}>
              <IoIosSearch className="search-icon" />
            </button>
            <input
              type="text"
              className="search-input"
              placeholder="검색"
              value={searchQuery}
              onChange={handleSearchInputChange}
              onKeyDown={handleKeyDown} // 엔터키로 검색
            />
          </div>

          {showDropdown && (
            <div className="dropdown">
              {filteredCrew.length > 0 ? (
                filteredCrew.map((crew, index) => (
                  <div key={index} className="dropdown-item">
                    {crew.name}
                  </div>
                ))
              ) : (
                <div className="dropdown-item">검색 결과가 없습니다</div>
              )}
              {recentSearches.length > 0 && (
                <div>
                  <div className="dropdown-header">최근 검색어</div>
                  {recentSearches.map((search, index) => (
                    <div key={index} className="recent-search-item">
                      <span
                        onClick={() => {
                          setSearchQuery(search);
                          handleSearch();
                        }}
                      >
                        {search}
                      </span>
                      <button
                        className="delete-search"
                        onClick={() => handleDeleteRecentSearch(search)}
                      >
                        <IoClose />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </section>

        <section className="form-group">
          <h2>
            <span className="highlight-text">홍길동</span>님께 추천하는 크루
          </h2>
          <div className="crew-list">
            {crewList.map((crew, index) => (
              <div key={index} className="crew-card">
                {crew.image ? (
                  <img src={crew.image} alt={crew.name} />
                ) : (
                  <div className="no-image-placeholder"></div>
                )}
                {/* 텍스트 숨기기 */}
                <div className="crew-name" style={{ display: 'none' }}>
                  {crew.name}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="form-group">
          <h2>현재 인기 크루</h2>
          <div className="popular-list">
            {popularList.map((crew, index) => (
              <div key={index} className="popular-card">
                {crew.image ? (
                  <img src={crew.image} alt={crew.name} />
                ) : (
                  <div className="no-image-placeholder"></div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="menu-bar-footer">
        <MenuBar />
      </footer>

      {showDropdown && (
        <div
          onClick={handleCloseDropdown}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999,
          }}
        ></div>
      )}
    </div>
  );
};

export default Forum;















