import React from "react";
import { Route, Routes } from "react-router-dom";
import MainContainer from "./Main";
import SigninContainer from "./Signin/SigninContainer";
import SignupContainer from "./Signup";


const AppRouter = () => {


    return(
        <div className="app">
            <Routes>
                <Route path="/" element={<MainContainer/>}/>
                <Route path="/signin" element={<SigninContainer/>}/>
                <Route path="/signup" element={<SignupContainer/>}></Route>
            </Routes>
        </div>
    )
    
}

export default AppRouter;