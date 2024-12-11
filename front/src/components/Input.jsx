import React from "react";
import './Input.css'


const Input = ({
    placeholder,
    width,


}) => {

    return(
        <div className="input-box">
            <input type="text" placeholder={ placeholder } width={ width } />
        </div>
    )
}

export default Input