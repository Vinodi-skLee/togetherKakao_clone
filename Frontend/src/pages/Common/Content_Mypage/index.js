import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../asset/css/app.css';
import kakaoicon from '../../asset/img/kakaoicon.png';

export default function Content_Main() {
  const name = sessionStorage.getItem('name');
  const email = sessionStorage.getItem('email');
  return (
    <>
      <div id="akContent" className="con_home">
        <div id="mypageContent">
          <div className="inner_block">
            <div className="profile">
              <div className="namefield">
                <h4 className="pro_tit">기부천사</h4>
                <h4 className="pro_tit">{name} 님!</h4>
                <p className="ellipsis_type1">{email}</p>
              </div>
              <div className="imagefield">
                <a className="pro_link" href="/preferences/profile">
                  <span className="pro_thumb">
                    <img className="pro_img" alt="profileImage" src={kakaoicon} />
                  </span>
                </a>
                <div className="pro_setting">
                  <a className="link_setting" href="/preferences">
                    프로필 설정
                  </a>
                </div>
              </div>
            </div>

            <div className="donation">
              <h3 className="do_tit">기부내역</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
