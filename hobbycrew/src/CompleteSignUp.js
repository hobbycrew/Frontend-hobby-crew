import React from 'react';
import { Mobile, PC } from "./mobilePC"; // 반응형 컴포넌트 import
import { useNavigate } from 'react-router-dom';
import './CompleteSignUp.css'; 

function CompleteSignUp() {
    const navigate = useNavigate();

  // '닫기' 버튼 클릭 시 Home으로 이동
    const handleClose = () => {
        navigate('/home');
};

return (
    <div className="sign-complete-container">
      {/* 모바일 화면 */}
    <Mobile>
        <div className="sign-complete-form-mobile">
                <h1>회원가입이 되셨어요!</h1>
                <h2>새로운 사람들과 같이하는 기쁨을 누려보세요</h2>
        <div className="button-form">
            <button className="close-button" onClick={handleClose}>
            닫기
            </button>
        </div>
        </div>
    </Mobile>

      {/* PC 화면 */}
    <PC>
        <div className="sign-complete-form-pc">
            <h1>회원가입이 되셨어요!</h1>
            <h2>새로운 사람들과 같이하는 기쁨을 누려보세요</h2>
        <div className="button-form">
            <button className="close-button" onClick={handleClose}>
            닫기
            </button>
        </div>
        </div>
    </PC>
    </div>
);
}

export default CompleteSignUp;
