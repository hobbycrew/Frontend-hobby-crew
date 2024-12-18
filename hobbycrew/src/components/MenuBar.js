import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
    MdHome,
    MdOutlineSpaceDashboard,
    MdSpaceDashboard,
    MdOutlineChatBubbleOutline,
    MdOutlineChatBubble,
} from "react-icons/md";
import { IoMdInformationCircleOutline, IoMdInformationCircle } from "react-icons/io";
import "./MenuBar.css";

const MenuBar = () => {
    const [activeMenu, setActiveMenu] = useState(""); // 현재 활성화된 메뉴 상태
    const [menuIcons, setMenuIcons] = useState({
        home: <MdHome />,
        forum: <MdOutlineSpaceDashboard />,
        chat: <MdOutlineChatBubbleOutline />,
        info: <IoMdInformationCircleOutline />,
    }); // 각 메뉴의 아이콘 상태

    const navigate = useNavigate();
    const location = useLocation();

    // 페이지 이동 및 아이콘 변경 상태 관리
    useEffect(() => {
        const path = location.pathname;
        if (path === "/home") {
            setActiveMenu("home");
            setMenuIcons((prevIcons) => ({
                ...prevIcons,
                home: <MdHome />,
            }));
        } else if (path === "/forum") {
            setActiveMenu("forum");
            setMenuIcons((prevIcons) => ({
                ...prevIcons,
                forum: <MdSpaceDashboard />,
            }));
        } else if (path === "/chat") {
            setActiveMenu("chat");
            setMenuIcons((prevIcons) => ({
                ...prevIcons,
                chat: <MdOutlineChatBubble />,
            }));
        } else if (path === "/info") {
            setActiveMenu("info");
            setMenuIcons((prevIcons) => ({
                ...prevIcons,
                info: <IoMdInformationCircle />,
            }));
        }
    }, [location.pathname]); // 페이지가 변경될 때마다 아이콘 상태를 업데이트

    const handleMenuClick = (menu) => {
        // 클릭된 메뉴의 아이콘 업데이트
        setMenuIcons((prevIcons) => ({
            ...prevIcons,
            [menu]:
                menu === "home"
                    ? <MdHome />
                    : menu === "forum"
                    ? <MdSpaceDashboard />
                    : menu === "chat"
                    ? <MdOutlineChatBubble />
                    : <IoMdInformationCircle />,
        }));

        // 클릭된 메뉴 활성화 상태 설정
        setActiveMenu(menu); // 상태 변경 후 페이지 이동

        // 상태 업데이트 후 navigate() 호출
        const path = `/${menu}`;
        setTimeout(() => {
            navigate(path); // activeMenu에 따라 페이지 이동
        }, 50); // 상태 업데이트가 완료된 후 바로 페이지 이동
    };

    return (
        <div className="Menubar">
            <div className="backgroundMenu">
                <div
                    className={`menu-item ${activeMenu === "home" ? "active" : ""}`}
                    onClick={() => handleMenuClick("home")}
                >
                    <div className="icon">{menuIcons.home}</div>
                    <span className="menu-text">홈</span>
                </div>
                <div
                    className={`menu-item ${activeMenu === "forum" ? "active" : ""}`}
                    onClick={() => handleMenuClick("forum")}
                >
                    <div className="icon">{menuIcons.forum}</div>
                    <span className="menu-text">게시판</span>
                </div>
                <div
                    className={`menu-item ${activeMenu === "chat" ? "active" : ""}`}
                    onClick={() => handleMenuClick("chat")}
                >
                    <div className="icon">{menuIcons.chat}</div>
                    <span className="menu-text">채팅</span>
                </div>
                <div
                    className={`menu-item ${activeMenu === "info" ? "active" : ""}`}
                    onClick={() => handleMenuClick("info")}
                >
                    <div className="icon">{menuIcons.info}</div>
                    <span className="menu-text">내 정보</span>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;

