import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Mobile, PC } from './mobilePC'; // 반응형 컴포넌트 import
import './SignupForm.css';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email_ID: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate(); // useNavigate 훅 사용

  // 입력값 변화 처리 함수
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // 회원가입 버튼 클릭 시 Home으로 이동
  const handleSignup = () => {
    console.log('회원가입 성공:', formData);  // 회원가입 데이터 확인용
    navigate('/complete-signup'); // ComplteSignUp 페이지로 이동
  };

  return (
    <div className="signup-container">
      <Mobile>
        <div className="signup-form signup-form-mobile">
          <h2>회원가입</h2>
          <h1><span className="fontLogo">HOBBYCREW</span> 에 오신것을 환영합니다!</h1>
          <form onSubmit={(e) => e.preventDefault()}> {/* form의 기본 동작을 막음 */}
            <div className="input-group">
              <label htmlFor="username">닉네임</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="email_ID">이메일</label>
              <input
                type="email"
                id="email_ID"
                name="email_ID"
                value={formData.email_ID}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">비밀번호</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="confirmPassword">비밀번호 확인</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <button type="button" className="signup-button" onClick={handleSignup}>회원가입</button> {/* onClick으로 회원가입 처리 */}
          </form>
        </div>
      </Mobile>

      <PC>
        <div className="signup-form signup-form-pc">
          <h2>회원가입</h2>
          <h1><span className="fontLogo">HOBBYCREW</span> 에 오신것을 환영합니다!</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <label htmlFor="username">닉네임</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="email_ID">이메일</label>
              <input
                type="email_ID"
                id="email_ID"
                name="email_ID"
                value={formData.email_ID}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">비밀번호</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="confirmPassword">비밀번호 확인</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <button type="button" className="signup-button" onClick={handleSignup}>회원가입</button>
          </form>
        </div>
      </PC>
    </div>
  );
};

export default SignupForm;

