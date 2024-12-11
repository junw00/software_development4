import React, { useState, useEffect } from "react";
import './Header.css';
import { Link } from "react-router-dom";
import axios from "axios";

const Header = () => {
    const [userId, setUserId] = useState(localStorage.getItem('userId'));

    useEffect(() => {
        // 로컬 스토리지에서 사용자 ID를 가져와 상태로 설정
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            setUserId(storedUserId);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('userId'); // 로컬 스토리지에서 사용자 ID 제거
        
        setUserId(null); // 상태 초기화
        window.location.href="http://localhost:3000"
    };

    return (
        <header className="header-container">
            <div className="header-body-wrap">
                <div className="header-logo-wrap">
                    <h1><Link to="/" className="header-logo">가계부</Link></h1>
                </div>
                <div className="header-right">
                    <ul className="header-auth-list">
                        {userId ? (
                            <>
                                <li className="header-user-id">{userId}</li>
                                <li><button onClick={handleLogout}>로그아웃</button></li>
                            </>
                        ) : (
                            <>
                                <li className="header-signin-list">
                                    <Link to="/signin" className="header-auth-signin">
                                        <div>로그인</div>
                                    </Link>
                                </li>
                                <li className="header-signup-list">
                                    <Link to="/signup" className="header-auth-signup">
                                        <div>회원가입</div>
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;