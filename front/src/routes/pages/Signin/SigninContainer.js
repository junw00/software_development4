import React from "react";
import SigninPresenter from "./SigninPresenter";
import axios from "axios";

const SigninContainer = () => {
    
    const onClickSignin = async (id, password) => {
        try {
            const res = await axios.post("http://localhost:8000/users/login", {
                id: id,
                password: password
            }, {
                headers: {'Content-Type': 'application/json'}
            });

            if (res.status === 200) {
                // alert(res.data.message); // 로그인 성공 메시지
                window.location.href='http://localhost:3000'
                console.log(res)
                localStorage.setItem('userId', res.data.userId)
            }
        } catch (err) {
            if (err.response && err.response.status === 401) {
                alert('로그인 실패'); // 로그인 실패 메시지
            } else {
                console.error("로그인 중 오류 발생:", err);
            }
        }
    };

    return (
        <SigninPresenter signin={onClickSignin} />
    );
};

export default SigninContainer;