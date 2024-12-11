import React from "react";
import SignupPresenter from "./SignupPresenter";
import axios from "axios";

const SignupContainer = () => {

    const onClickSignup = async (id, password) => {
        try {
            const res = await axios.post("http://localhost:8000/users/signup", {
                id: id,
                password: password
            }, {
                headers: {'Content-Type': 'application/json'}
            });

            if (res.status === 201) {
                alert(res.data.message); // 회원가입 성공 메시지
                window.location.href='http://localhost:3000/'
            }
        } catch (err) {
            if (err.response && err.response.status === 409) {
                alert(err.response.data.message); // 아이디 중복 메시지
            } else {
                console.error("회원가입 중 오류 발생:", err);
            }
        }
    };

    return (
        <SignupPresenter signup={onClickSignup} />
    );
};

export default SignupContainer;