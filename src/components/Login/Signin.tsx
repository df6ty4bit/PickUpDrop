import React, { useState } from "react";
import email_icon from "../../../src/assets/email.png";
import user_icon from "../../../src/assets/person.png";
import password_icon from "../../../src/assets/person.png";
import "../../../src/components/Login/Signin.css";

const Signin = () => {
    const [action, setAction] = useState("Sign Up");
    return (
        <>
            <form action="">
                <div className="container">
                    <div className="header">
                        <div className="text">{action}</div>

                        <div className="underline"></div>
                    </div>
                    <div className="inputs">
                        {action === "Login" ? (
                            <div></div>
                        ) : (
                            <div className="input">
                                <img src={user_icon} alt="" />

                                <input type="text" placeholder="Name" />
                            </div>
                        )}

                        <div className="input">
                            <img src={email_icon} alt="" />

                            <input type="email" placeholder="Email" />
                        </div>

                        <div className="input">
                            <img src={password_icon} alt="" />

                            <input type="password" placeholder="Password" />
                        </div>
                    </div>
                    {action==="Sign Up"?<div></div>: <div className="forgot-password">
                        Forgot Password? <span>Cick Here</span>
                    </div>
                   }
                    <div className="submit-container">
                        <div
                            className={
                                action === "Login" ? "submit gray" : "submit"
                            }
                            onClick={() => {
                                setAction("Sign Up");
                            }}
                        >
                            Sign Up
                        </div>
                        <div
                            className={
                                action === "Sign Up" ? "submit gray" : "submit"
                            }
                            onClick={() => {
                                setAction("Login");
                            }}
                        >
                            Login
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Signin;
