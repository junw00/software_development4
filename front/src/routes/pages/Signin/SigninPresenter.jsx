import React, { useState } from "react";
import { Header } from "../../../components";
import './signin.css';

const SigninPresenter = ({ signin }) => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const onChangeId = (e) => {
        setId(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSignin = async () => {
        try {
            const response = await signin(id, password);
            if (response.status === 200) {
                localStorage.setItem('userId', response.data.userId); // 로컬 스토리지에 사용자 ID 저장
                window.location.href = "/"; // 로그인 후 메인 페이지로 이동
            }
        } catch (error) {
            console.error("로그인 실패:", error);
        }
    }

    return (
        <div className="signin-container">
            <Header />
            <div className="signin-body-wrap">
                <div className="signin-body-header">
                    <h3 className="signin-title">로그인</h3>
                </div>
                <div className="signin-input-wrap">
                    <input type="text" placeholder="아이디" onChange={onChangeId} />
                    <input type="password" placeholder="비밀번호" onChange={onChangePassword} />
                </div>
                <div>
                    <button onClick={handleSignin}>로그인</button>
                </div>
            </div>
        </div>
    );
}

export default SigninPresenter;