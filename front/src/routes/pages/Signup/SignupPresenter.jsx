import React, { useState } from "react";

const SignupPresenter = ({ signup }) => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const onChangeId = (e) => {
        setId(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSignup = () => {
        signup(id, password);
    };

    return (
        <div className="signup-container">
            <h3>회원가입</h3>
            <div className="signup-input-wrap">
                <input type="text" placeholder="아이디" value={id} onChange={onChangeId} />
                <input type="password" placeholder="비밀번호" value={password} onChange={onChangePassword} />
            </div>
            <button onClick={handleSignup}>회원가입</button>
        </div>
    );
};

export default SignupPresenter;