import React from 'react';
// import headerImg from '../../../asset/img/csee-logo-symbol.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import { GoogleLogout } from 'react-google-login';

export default function Header(props) {
  // const onLogout = () => {
  //   window.sessionStorage.removeItem('user_id');
  // };

  return (
    <>
      <Navbar
        bg="white"
        variant="light"
        style={{
          borderBottom: '1px solid #eee',
          height: '70px',
          fontSize: '14px',
          lineHeight: '1.5',
          fontFamily: 'KakaoBig Regular,Malgun Gothic,맑은 고딕,Apple SD Gothic Neo,dotum,돋움,sans-serif',
          color: '#444',
        }}
      >
        <Container>
          <Navbar.Brand href="/">카카오같이가치</Navbar.Brand>
          <Nav className="me-auto" style={{ fontWeight: 'bold' }}>
            <Nav.Link href="#home">같이기부</Nav.Link>
            <Nav.Link href="#features">모두의행동</Nav.Link>
            <Nav.Link href="#pricing">마음날씨</Nav.Link>
            <Nav.Link href="#pricing">더보기</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
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
