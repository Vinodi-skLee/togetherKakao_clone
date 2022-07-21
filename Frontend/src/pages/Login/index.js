import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../asset/css/app.css';
import GoogleSignin from './Signin/GoogleSignin';

export default function Longin() {
    return (
        <>
            <div id="akLogin">
                <div id="login_banner">
                    <div className="login_container">
                        <div className="loginForm_left">
                            <img src="https://mud-kage.kakao.com/dn/ZpEO1/btqnmn1gFs1/kOafomjWL40sK9xRivDpDK/image.png"
                                 alt=""/>
                        </div>
                        <div className="loginForm_right">
                            <div className="loginForm_right_tit">로그인</div>
                            <div className="loginForm_right_input">
                                <div className="google_login">
                                    <GoogleSignin/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
