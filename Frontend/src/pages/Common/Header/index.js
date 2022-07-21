import React from 'react';
import {Link} from 'react-router-dom';
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
                    <Link to="/">
                        <img src="//t1.kakaocdn.net/together_image/svg/logo_pc.svg"/>
                    </Link>
                    <div role="navigaion" className="link_head">
                        <Link className="link_heads" to="#home">
                            <span class="txt_heads">같이기부</span>
                        </Link>
                        <Link className="link_heads" to="#home">
                            <span class="txt_heads">모두의행동</span>
                        </Link>
                        <Link className="link_heads" to="#home">
                            <span class="txt_heads">마음날씨</span>
                        </Link>
                        <Link className="link_heads" to="#home">
                            <span class="txt_heads">더보기</span>
                        </Link>
                    </div>
                    <div className="util_head">
                        <Link className="util_heads" to="/">
                            제안하기
                        </Link>
                        <Link className="login_heads" to="/Login">
                            로그인
                        </Link>
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
