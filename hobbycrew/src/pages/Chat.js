import React, { useState, useEffect, useRef } from 'react';
import './Chat.css'; // 스타일 파일 임포트

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const socket = useRef(null);

  useEffect(() => {
    // WebSocket 서버에 연결
    socket.current = new WebSocket('wss://example.com/chat');
    
    // 메시지를 받으면 상태 업데이트
    socket.current.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      setMessages((prev) => [...prev, newMessage]);
    };

    // 컴포넌트 언마운트 시 WebSocket 닫기
    return () => {
      socket.current.close();
    };
  }, []);

  const handleSendMessage = () => {
    if (input.trim() && socket.current.readyState === WebSocket.OPEN) {
      const message = { text: input, sender: 'You', timestamp: new Date().toISOString() };
      socket.current.send(JSON.stringify(message)); // 서버로 메시지 전송
      setMessages((prev) => [...prev, message]); // 로컬에 메시지 추가
      setInput('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className="chat-message">
            <span className="chat-sender">{msg.sender}:</span>
            <span className="chat-text">{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chat-input"
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage} className="chat-button">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
