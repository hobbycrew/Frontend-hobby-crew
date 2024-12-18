import React from 'react';
import { useMediaQuery } from 'react-responsive';

// 모바일 화면에서만 콘텐츠를 표시하는 컴포넌트
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return <>{isMobile && children}</>;  // 모바일 화면에서는 children을 표시
};

// PC 화면에서만 콘텐츠를 표시하는 컴포넌트
export const PC = ({ children }) => {
  const isPc = useMediaQuery({
    query: "(min-width: 769px)",
  });

  return <>{isPc && children}</>;  // PC 화면에서는 children을 표시
};