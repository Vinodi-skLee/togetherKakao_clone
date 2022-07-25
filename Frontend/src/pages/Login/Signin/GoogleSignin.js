import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import '../../asset/css/app.css';

export default function GoogleSignin() {
  const navigate = useNavigate();

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_ID,
        scope: 'email',
      });
    }

    gapi.load('client:auth2', start);
  }, []);

  const onSuccess = async (res) => {
    console.log(res);
    const params = new URLSearchParams();
    params.append('idToken', res.tokenObj.id_token);
    sessionStorage.setItem('accessToken', res.tokenObj.access_token);
    sessionStorage.setItem('name', res.profileObj.name);
    navigate('/', {
      //   state: { email: userEmail },
    });
    // const googleLogin = async () => {
    //   const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/login`, params, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   });

    // };

    // googleLogin();
  };

  const onFailure = (error) => {
    console.log(error);
  };
  return (
    <>
      <GoogleLogin clientId={process.env.REACT_APP_GOOGLE_ID} buttonText="Google 계정으로 로그인" onSuccess={onSuccess} onFailure={onFailure} />
    </>
  );
}
