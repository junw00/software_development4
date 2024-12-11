import React from "react";

const Button = ({btnName, onClick}) => {

    return(
        <div>
            <button onClick={onClick}>{btnName}</button>
        </div>
    )
}

export default Button