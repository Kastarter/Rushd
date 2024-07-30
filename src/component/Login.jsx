import React, {useEffect, useState} from "react";
import { IoIosCloseCircleOutline } from "react-icons/io"

export const LoginForm = () => {

    const [popupStyle, showPopup] = useState("hide")
    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

    const close = () => {
	const doc = document.getElementById('login1');
        doc.style.display = "none";
    }

    const onSuccess = e => {
        alert("تم تسجيل الدخول")
        console.log(e)
    }

    const onFailure = e => {
        alert("فشلت عملية تسجيل الدخول")
        console.log(e)
    }

    return (
        <div id="login1" className="cover" style={{display: "none"}}>
            <a href="#" onClick={close} style={{right: "45%", position: "relative", scale: "1.5"}}><IoIosCloseCircleOutline/></a>
            <input type="text" placeholder="البريد الألكتروني" />
            <input type="password" placeholder="كلمة السر" />

            <div className="login-btn" onClick={popup}>تسجيل الدخول</div>

            <div className={popupStyle}>
                <h3>Login Failed</h3>
                <p>Username or password incorrect</p>
            </div>
            
        </div>
    )
}

