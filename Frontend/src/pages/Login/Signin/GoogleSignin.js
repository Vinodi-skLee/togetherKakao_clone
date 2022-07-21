import React from 'react';
import {GoogleOAuthProvider, GoogleLogin} from '@react-oauth/google';
import axios from 'axios';
import '../../asset/css/app.css';

export default function GoogleSignin() {
    const onSuccess = async (res) => {
        console.log(res);
        const {
            googleId,
            profileObj: {email, name},
        } = res;
        const params = new URLSearchParams();
        params.append('idToken', res.tokenObj.id_token);

        const googleLogin = async () => {
            const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/login`, params, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            localStorage.setItem('accessToken', res.data.token.access);
            localStorage.setItem('refreshToken', res.data.token.refresh);
        };

        googleLogin();
    };

    const onFailure = (error) => {
        console.log('Login Failed');
    };
    return (
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_ID}>
            <GoogleLogin onSuccess={onSuccess} onFailure={onFailure}/>
        </GoogleOAuthProvider>
    );
}
