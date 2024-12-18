import React, { useState } from "react";
import { Mobile, PC } from "./mobilePC"; // 반응형 컴포넌트 import
import "./login.css"; // 로그인 페이지에 대한 스타일
import ForgotCredentials from "./ForgotCredentials"; // 아이디/비밀번호 찾기 화면 import
import { useNavigate } from "react-router-dom"; // useNavigate import

function Login({ toggleForm }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showForgot, setShowForgot] = useState(false); // 아이디/비밀번호 찾기 화면을 표시할 상태 추가
  const navigate = useNavigate(); // useNavigate 훅 초기화

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "80px",
      padding: "10px",
    },
    button: {
      padding: "1px 3px",
      backgroundColor: "white",
      color: "black",
      border: "none",
      borderRadius: "12px",
      cursor: "pointer",
    },
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setError("아이디/비밀번호를 입력해주세요.");
      return;
    }
    console.log("아이디:", username);
    console.log("비밀번호:", password);
    setError("");
    alert("로그인 성공!");

    // 로그인 성공 시 홈 페이지로 이동
    navigate("/home"); // /Home 경로로 이동
  };

  const handleForgotCredentials = () => {
    setShowForgot(true); // 아이디/비밀번호 찾기 화면을 표시
  };

  return (
    <div className="login-container">
      {showForgot ? (
        <ForgotCredentials toggleForm={setShowForgot} /> // 아이디/비밀번호 찾기 화면을 보여줌
      ) : (
        <>
          {/* 모바일 화면용 로그인 폼 */}
          <Mobile>
            <div className="login-form-mobile">
              <h1 className="fontLogo">HOBBYCREW</h1>
              <h2>당신 근처의 이웃과 함께!</h2>
              <h3>다양한 취미를 함께할 사람들을 모아보세요</h3>
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="ID"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="PASSWORD"
                  />
                </div>

                {error && <div className="error-message">{error}</div>}
                <button type="submit" className="login-button">
                  Login
                </button>

                <div style={styles.container}>
                  <button
                    style={{ ...styles.button, fontSize: "11px" }}
                    onClick={handleForgotCredentials}
                  >
                    아이디/비밀번호 찾기
                  </button>
                  <button
                    style={{ ...styles.button, fontSize: "12px" }}
                    onClick={(e) => {
                      e.preventDefault(); // 폼 제출 방지
                      navigate("/signup")
                    }}
                  >
                    회원가입
                  </button>
                </div>
              </form>
            </div>
          </Mobile>

          {/* PC 화면용 로그인 폼 */}
          <PC>
            <div className="login-form-pc">
              <h1 className="fontLogo">HOBBYCREW</h1>
              <h2>당신 근처의 이웃과 함께!</h2>
              <h3>다양한 취미를 함께할 사람들을 모아보세요</h3>
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="ID"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="PASSWORD"
                  />
                </div>
                {error && <div className="error-message">{error}</div>}
                <button type="submit" className="login-button">
                  Login
                </button>

                <div style={styles.container}>
                  <button
                    style={{ ...styles.button, fontSize: "11px" }}
                    onClick={handleForgotCredentials}
                  >
                    아이디/비밀번호 찾기
                  </button>
                  <button
                    style={{ ...styles.button, fontSize: "12px" }}
                    onClick={toggleForm} // 회원가입 화면으로 전환
                  >
                    회원가입
                  </button>
                </div>
              </form>
            </div>
          </PC>
        </>
      )}
    </div>
  );
}

export default Login;

