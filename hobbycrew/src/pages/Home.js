import React, { useState } from "react";
import MenuBar from "../components/MenuBar"; // 하단 네비게이션
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [exercise] = useState({});

  const handlePlayClick = () => {
    if (exercise.url) {
      window.open(exercise.url, "_blank"); // 새 탭에서 URL 열기
    } else {
      alert("");
    }
  };

  return (
    <div className="home-container">
      <div className="home-form">
        {/* 헤더 */}
        <header className="header">
          <h1
            className="fontLogo"
            onClick={() => navigate("/home")} // 로고 누르면 홈으로 되돌아오기
            style={{ cursor: "pointer" }}
          >
            HOBBYCREW
          </h1>
          <div className="button-group">
            <button className="auth-button" onClick={() => navigate("/login")}>로그인</button>
            <button className="auth-button" onClick={() => navigate("/signup")}>회원가입</button>
          </div>
        </header>

        {/* 오늘의 운동 */}
        <section className="form-group">
          <div className="today-quizs">
            <h2>오늘의 퀴즈</h2>
            <div className="quiz-content">
              <p className="quiz-title">{exercise.title || ""}</p>
              <button className="quiz-play" onClick={handlePlayClick}>바로 퀴즈 풀어보기</button>
            </div>
          </div>
        </section>

        {/* 오늘의 크루 */}
        <section className="form-group">
          <h3>오늘의 크루</h3>
          <div className="crew-list">
            {Array.from({ length: 7 }).map((_, index) => (
              <div className="crew-card" key={index}></div>
            ))}
          </div>
        </section>

        {/* 오늘의 관심사 */}
        <section className="form-group">
          <h3>오늘의 관심사</h3>
          <div className="interest-list">
            {Array.from({ length: 5 }).map((_, index) => (
              <div className="interest-card" key={index}></div>
            ))}
          </div>
        </section>

        {/* 하단 네비게이션 */}
        <footer className="menu-bar-footer">
          <MenuBar />
        </footer>
      </div>
    </div>
  );
};

export default Home;






