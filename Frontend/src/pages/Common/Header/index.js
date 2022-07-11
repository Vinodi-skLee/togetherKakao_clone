import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../asset/css/app.css';
// import { GoogleLogout } from 'react-google-login';

export default function Header() {
  // const onLogout = () => {
  //   window.sessionStorage.removeItem('user_id');
  // };

  return (
    <div className="header_container">
      <div id="akHead" bg="white" variant="light">
        <div className="logo_head">
          <a href="/">
            <img src="//t1.kakaocdn.net/together_image/svg/logo_pc.svg" />
          </a>
          <div role="navigaion" className="link_head">
            <a className="link_heads" href="#home">
              <span class="txt_heads">같이기부</span>
            </a>
            <a className="link_heads" href="#home">
              <span class="txt_heads">모두의행동</span>
            </a>
            <a className="link_heads" href="#home">
              <span class="txt_heads">마음날씨</span>
            </a>
            <a className="link_heads" href="#home">
              <span class="txt_heads">더보기</span>
            </a>
          </div>
          <div className="util_head">
            <a className="util_heads" hred="/">
              제안하기
            </a>
            <a className="login_heads" hred="/">
              로그인
            </a>
            <button type="button" routerlink="/search" id="btnSearch" className="btn_search" tabindex="0">
              <span class="ico_together ico_search">검색</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    //   <Navbar bg="light">
    //     <Container>
    //       <Navbar.Brand href="/">{/* <img alt="" src={headerImg} width="30" height="30" className="d-inline-block align-center" /> */} 카카오같이가치</Navbar.Brand>
    //       {/* <Link to="/">
    //         {sessionStorage.getItem('user_id') === null ? (
    //           <Button type="button" onClick={onLogout} style={{ backgroundColor: '#2e75b6', border: '0px' }}>
    //             로그인
    //           </Button>
    //         ) : (
    //           <Button type="button" onClick={onLogout} style={{ backgroundColor: '#2e75b6', border: '0px' }}>
    //             로그아웃
    //           </Button>
    //         )}
    //       </Link> */}
    //     </Container>
    //   </Navbar>
    // </>
  );
}
