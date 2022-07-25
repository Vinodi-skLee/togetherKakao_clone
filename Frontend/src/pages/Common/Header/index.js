import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../asset/css/app.css';

export default function Header() {
  const onLogout = () => {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('name');
    window.history.push('/');
  };

  return (
    <div className="header_container">
      <div id="akHead" bg="white" variant="light">
        <div className="logo_head">
          <Link to="/">
            <img src="//t1.kakaocdn.net/together_image/svg/logo_pc.svg" />
          </Link>
          <div role="navigaion" className="link_head">
            <Link className="link_heads" to="#home">
              <span className="txt_heads">같이기부</span>
            </Link>
            <Link className="link_heads" to="#home">
              <span className="txt_heads">모두의행동</span>
            </Link>
            <Link className="link_heads" to="#home">
              <span className="txt_heads">마음날씨</span>
            </Link>
            <Link className="link_heads" to="#home">
              <span className="txt_heads">더보기</span>
            </Link>
          </div>
          <div className="util_head">
            {sessionStorage.getItem('accessToken') === null ? (
              ''
            ) : (
              <Link className="util_heads" to="/mypage">
                마이페이지
              </Link>
            )}
            {sessionStorage.getItem('accessToken') === null ? (
              <Link className="login_heads" to="/Login">
                로그인
              </Link>
            ) : (
              <Link className="login_heads" to="/" onClick={onLogout}>
                로그아웃
              </Link>
            )}
            <Link className="search_btn" to="/">
              <span className="ico_search">검색</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
