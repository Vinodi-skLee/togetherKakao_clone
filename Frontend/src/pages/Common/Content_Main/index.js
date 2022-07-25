import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../asset/css/app.css';
import img1 from '../../asset/img/1.jpeg';
import img2 from '../../asset/img/2.jpeg';
import img3 from '../../asset/img/3.jpeg';
import img4 from '../../asset/img/4.png';
import img5 from '../../asset/img/5.jpeg';
import img6 from '../../asset/img/6.jpeg';
import img7 from '../../asset/img/7.jpeg';
import img8 from '../../asset/img/8.jpeg';
import img9 from '../../asset/img/9.jpeg';
import img10 from '../../asset/img/10.jpeg';
import img11 from '../../asset/img/11.jpeg';

export default function Content_Main() {
  return (
    <div id="akContent" className="con_home">
      <div id="mainContent">
        <div className="topslide_container">
          <div className="inner_slide">
            <ul className="list_slide" data-tiara-layer="cover" style={{ touchAction: 'pan-y', userSelect: 'none' }}>
              <li className="slide_pannel">
                <a aria-hidden="false" className="link_slide" href="/">
                  <div className="area_cont">
                    <span className="tag_slide">모두의행동</span>
                    <span className="tit_slide">
                      작은 가게,<br></br>오래오래 가치 가게!
                    </span>
                    <span className="desc_slide ellipsis_type1">
                      우리 근처에서 자리를 지키는 동네 작은 가게들,<br></br>
                      지금 바로 모두의행동에서 따뜻한 인사와 작은 소비로<br></br>
                      당신 주변의 소중한 가게를 함께 응원해보면 어떨까요?
                    </span>
                  </div>
                  <span className="area_thumb">
                    <img className="img_slide" src={img2} alt="img2" />
                  </span>
                </a>
              </li>
              <li className="slide_pannel">
                <a aria-hidden="false" className="link_slide" href="/">
                  <div className="area_cont">
                    <span className="tag_slide">HGU나눔0711</span>
                    <span className="tit_slide">
                      한동아 건강하게<br></br>
                      자라다오
                    </span>
                    <span className="desc_slide ellipsis_type1">
                      "우리 한동이가 이대로 놔두면 사라져버릴까봐 무서워요"<br></br>
                      학생들은 한동이가 힘든 기간을 잘 이겨내고 굳건히 자리를 지키길 바랍니다.<br></br>
                      한동이가 또래 학교들처럼 뛰어놀 수 있도록 응원을 전해보아요.
                    </span>
                  </div>
                  <span className="area_thumb">
                    <img className="img_slide" src={img2} alt="img2" />
                  </span>
                </a>
              </li>
              <li className="slide_pannel">
                <a aria-hidden="false" className="link_slide" href="/">
                  <div className="area_cont">
                    <span className="tag_slide">3번 슬라이드</span>
                    <span className="tit_slide">슬라이드 제목</span>
                    <span className="desc_slide ellipsis_type1">슬라이드 설명</span>
                  </div>
                  <span className="area_thumb">
                    <img className="img_slide" src={img1} alt="img1" />
                  </span>
                </a>
              </li>
              <li className="slide_pannel">
                <a aria-hidden="false" className="link_slide" href="/">
                  <div className="area_cont">
                    <span className="tag_slide">4번 슬라이드</span>
                    <span className="tit_slide">슬라이드 제목</span>
                    <span className="desc_slide ellipsis_type1">슬라이드 설명</span>
                  </div>
                  <span className="area_thumb">
                    <img className="img_slide" src={img1} alt="img1" />
                  </span>
                </a>
              </li>
              <li className="slide_pannel">
                <a aria-hidden="false" className="link_slide" href="/">
                  <div className="area_cont">
                    <span className="tag_slide">5번 슬라이드</span>
                    <span className="tit_slide">슬라이드 제목</span>
                    <span className="desc_slide ellipsis_type1">슬라이드 설명</span>
                  </div>
                  <span className="area_thumb">
                    <img className="img_slide" src={img1} alt="img1" />
                  </span>
                </a>
              </li>
            </ul>
            <div className="paginations"></div>
          </div>
          <div className="act_banner">
            <div className="act_container">
              <div className="left_banner_container">
                <div className="tit_banner"></div>
                <a href="/" className="detail_banner">
                  자세히 보기
                </a>
              </div>
              <a className="right_banner" aria-hidden="false" href="/">
                <div className="right_banner_top">더 나은 세상을 위한 행동에 참여해보세요!</div>
                <div className="right_banner_bottom">
                  <span className="img_area">
                    <img className="img_slide" alt="img3" src={img3} />
                  </span>
                  <div className="text_area">
                    <span className="tag_banner">1321명 활동중</span>
                    <span className="tit_banner2">우리학교 '작은가게' 응원하고 오래오래 함께해요!</span>
                    <span className="desc_banner">나만 알기 아까운 작은 가게가 있다면, 지금 바로 행동하세요!</span>
                  </div>
                </div>
              </a>

              {/* <span className="area_thumb">
                <img className="img_slide" src={img1} alt="img1" />
              </span> */}
            </div>
          </div>
          <div className="fund_container">
            <span className="tit_banner3">가장 쉬운 나눔</span>
            <ul className="fund_list">
              <li>
                <a className="fund_link" href="/">
                  <img className="find_img" alt="img4" src={img4} />
                  <div className="fund_list_text">
                    <span className="list_title">어르신의 가벼운 발걸음을 위해, 보행보조기를 선물해주세요!</span>
                    <span className="list_propo">사랑의전화한동종합사회복지관</span>
                  </div>
                  <span className="fund_list_gage">
                    <span className="state_bar">
                      <span className="state_gage state_ing" style={{ width: '70%' }}></span>
                    </span>
                  </span>
                  <span className="price_goal"> 440,900원 </span>
                </a>
              </li>
              <li>
                <a className="fund_link" href="/">
                  <img className="find_img" alt="img5" src={img5} />
                  <div className="fund_list_text">
                    <span className="list_title">운동을 좋아하는 나에게 내려진 시한부 인생</span>
                    <span className="list_propo">한동근육장애인협회</span>
                  </div>
                  <span className="fund_list_gage">
                    <span className="state_bar">
                      <span className="state_gage state_ing" style={{ width: '45%' }}></span>
                    </span>
                  </span>
                  <span className="price_goal"> 1,450,700원 </span>
                </a>
              </li>
              <li>
                <a className="fund_link" href="/">
                  <img className="find_img" alt="img6" src={img6} />
                  <div className="fund_list_text">
                    <span className="list_title">시각장애인 어르신들의 시원한 여름 밥상, 함께해요</span>
                    <span className="list_propo">한동시립장애인복지관</span>
                  </div>
                  <span className="fund_list_gage">
                    <span className="state_bar">
                      <span className="state_gage state_ing" style={{ width: '37%' }}></span>
                    </span>
                  </span>
                  <span className="price_goal"> 438,800원 </span>
                </a>
              </li>
              <li>
                <a className="fund_link" href="/">
                  <img className="find_img" alt="img7" src={img7} />
                  <div className="fund_list_text">
                    <span className="list_title">어르신 매일매일 오늘처럼 한가위만 같으세요!</span>
                    <span className="list_propo">한동실버복지센터</span>
                  </div>
                  <span className="fund_list_gage">
                    <span className="state_bar">
                      <span className="state_gage state_ing" style={{ width: '64%' }}></span>
                    </span>
                  </span>
                  <span className="price_goal"> 632,800원 </span>
                </a>
              </li>
              <li>
                <a className="fund_link" href="/">
                  <img className="find_img" alt="img8" src={img8} />
                  <div className="fund_list_text">
                    <span className="list_title">따뜻한 사랑으로 품어줄 가족을 기다리는 영아원 아이들</span>
                    <span className="list_propo">대한한동복지회</span>
                  </div>
                  <span className="fund_list_gage">
                    <span className="state_bar">
                      <span className="state_gage state_ing" style={{ width: '90%' }}></span>
                    </span>
                  </span>
                  <span className="price_goal"> 8,819,900원 </span>
                </a>
              </li>
              <li>
                <a className="fund_link" href="/">
                  <img className="find_img" alt="img9" src={img9} />
                  <div className="fund_list_text">
                    <span className="list_title">탄자니아 아이들에게 장난감을 보낼 수 있게 도와주세요.</span>
                    <span className="list_propo">주식회사 한끼리공장</span>
                  </div>
                  <span className="fund_list_gage">
                    <span className="state_bar">
                      <span className="state_gage state_ing" style={{ width: '21%' }}></span>
                    </span>
                  </span>
                  <span className="price_goal"> 3,769,400원 </span>
                </a>
              </li>
              <li>
                <a className="fund_link" href="/">
                  <img className="find_img" alt="img10" src={img10} />
                  <div className="fund_list_text">
                    <span className="list_title">아픈 한동이를 위해 92년된 낡은 집을 고쳐주세요.</span>
                    <span className="list_propo">사단법인 한동한가</span>
                  </div>
                  <span className="fund_list_gage">
                    <span className="state_bar">
                      <span className="state_gage state_ing" style={{ width: '73%' }}></span>
                    </span>
                  </span>
                  <span className="price_goal"> 5,732,100원 </span>
                </a>
              </li>
              <li>
                <a className="fund_link" href="/">
                  <img className="find_img" alt="img11" src={img11} />
                  <div className="fund_list_text">
                    <span className="list_title">건강 음료로 홀몸 어르신의 건강과 안부를 확인해주세요!</span>
                    <span className="list_propo">한동양덕노인복지관</span>
                  </div>
                  <span className="fund_list_gage">
                    <span className="state_bar">
                      <span className="state_gage state_ing" style={{ width: '42%' }}></span>
                    </span>
                  </span>
                  <span className="price_goal"> 544,400원 </span>
                </a>
              </li>
            </ul>
            <div className="fund_readmore">
              <a className="fund_readmore_icon" hred="/">
                더보기
              </a>
            </div>
          </div>
          <div className="img_banner">
            <div className="img_container">
              <div className="img_left_container">
                <div className="img_banner_txt">
                  <span className="img_banner_tag">새소식</span>
                  <span className="img_banner_tit">소중하고 귀한 마음이 담긴 택배</span>
                  <span className="img_banner_tag_desc">
                    9월 14일(월) 점심에 마스크가 도착하였습니다. 주문한 적이 없는데 어떻게 온 건지 고민하고 있을 때 '마스크 재중'이라는 글씨를 보고 '설마'하는 마음으로 조심스럽게
                    택배를 열어보았습니다. 택배를 열었을 때는 조심스럽게 진공된 마스크가 들어...
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="story_container">
            <a className="story_banner" href="/">
              <img className="story_banner_img" src="https://mud-kage.kakaocdn.net/dn/cNhupn/btrGE2vmZgH/UjfKDHXe7gv99TuYeFFMPk/img.png" alt="" />
            </a>
          </div>
          <div className="ani_container"></div>
        </div>
      </div>
    </div>
  );
}
