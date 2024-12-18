import React, { useState } from "react";
import { Mobile, PC } from "./mobilePC"; // 반응형 컴포넌트 import
import "./ForgotCredentials.css"; // 아이디/비밀번호 찾기 페이지에 대한 스타일
import "./login";

function ForgotCredentials({ toggleForm }) {
  const [mode, setMode] = useState(""); // 아이디 찾기 또는 비밀번호 찾기 모드
  const [email, setEmail] = useState(""); // 이메일 상태 (아이디 찾기)
  const [username, setUsername] = useState(""); // 아이디 상태 (비밀번호 찾기)
  const [newPassword, setNewPassword] = useState(""); // 새 비밀번호 상태
  const [error, setError] = useState(""); // 에러 메시지 상태

  // 이메일/아이디 검증 후 알림
  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "findId") {
      if (email === "") {
        setError("이메일을 입력해주세요.");
        return;
      }
      alert("입력한 이메일로 아이디를 안내드립니다.");
    } else if (mode === "findPassword") {
      if (username === "" || newPassword === "") {
        setError("아이디와 새 비밀번호를 입력해주세요.");
        return;
      }
      alert("새 비밀번호로 변경되었습니다.");
    }
    setError("");
  };

  return (
    <div className="forgot-credentials-container">
      {/* 모바일 화면용 아이디/비밀번호 찾기 폼 */}
      <Mobile>
        <div className="forgot-form-mobile">
          <h1 className="fontLogo">HOBBYCREW</h1>
          <h2>아이디/비밀번호 찾기</h2>
          <div className="mode-selector">
            <button
              onClick={() => setMode("findId")}
              className={mode === "findId" ? "selected" : ""}
            >
              아이디 찾기
            </button>
            <button
              onClick={() => setMode("findPassword")}
              className={mode === "findPassword" ? "selected" : ""}
            >
              비밀번호 찾기
            </button>
          </div>

          {mode === "findId" && (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="이메일"
                />
              </div>
              {error && <div className="error-message">{error}</div>}
              <button type="submit" className="submit-button">
                아이디 찾기
              </button>
            </form>
          )}

          {mode === "findPassword" && (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="아이디"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="새 비밀번호"
                />
              </div>
              {error && <div className="error-message">{error}</div>}
              <button type="submit" className="submit-button">
                비밀번호 찾기
              </button>
            </form>
          )}

          <div className="forgot-button-container">
            <button
              className="forgot-button"
              onClick={() => toggleForm(false)} // 뒤로가기 버튼
            >
              뒤로가기
            </button>
          </div>
        </div>
      </Mobile>

      {/* PC 화면용 아이디/비밀번호 찾기 폼 */}
      <PC>
        <div className="forgot-form-pc">
          <h1 className="fontLogo">HOBBYCREW</h1>
          <h2>아이디/비밀번호 찾기</h2>
          <div className="mode-selector">
            <button
              onClick={() => setMode("findId")}
              className={mode === "findId" ? "selected" : ""}
            >
              아이디 찾기
            </button>
            <button
              onClick={() => setMode("findPassword")}
              className={mode === "findPassword" ? "selected" : ""}
            >
              비밀번호 찾기
            </button>
          </div>

          {mode === "findId" && (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="이메일"
                />
              </div>
              {error && <div className="error-message">{error}</div>}
              <button type="submit" className="submit-button">
                아이디 찾기
              </button>
            </form>
          )}

          {mode === "findPassword" && (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="아이디"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="새 비밀번호"
                />
              </div>
              {error && <div className="error-message">{error}</div>}
              <button type="submit" className="submit-button">
                비밀번호 찾기
              </button>
            </form>
          )}

          <div className="forgot-button-container">
            <button
              className="forgot-button"
              onClick={() => toggleForm(false)} // 뒤로가기 버튼
            >
              뒤로가기
            </button>
          </div>
        </div>
      </PC>
    </div>
  );
}

export default ForgotCredentials;
