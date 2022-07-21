import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../asset/css/app.css';
// import { GoogleLogout } from 'react-google-login';

export default function Footer() {
    return (
        <div className="footer_container">
            <div id="akFoot">
                <div className="inner_footer">
                    <a className="link_home" href="/"/>
                    <div className="info_footer">
                        <p className="util_foot_desc">
                            당신의 착한 마음을 응원합니다.<br></br>더 좋은 세상을 꿈꾼다면 지금 시작해보세요.
                        </p>
                        <a className="util_foot" hred="/">
                            제안하기
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
