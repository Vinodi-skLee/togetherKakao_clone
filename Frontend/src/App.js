import React from 'react';
// import React, {useState, useEffect} from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
// import Login from "./pages/Login";
// import LoginGoogle from "./pages/Login/Googlebutton";
// import Admin from "./pages/Admin";
// import Register from "./pages/Register";
// import AdminRegister from "./pages/Register/Admin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
}
