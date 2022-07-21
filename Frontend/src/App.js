import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Login';
// import Login from "./pages/Login";
// import LoginGoogle from "./pages/Login/Googlebutton";
// import Admin from "./pages/Admin";
// import Register from "./pages/Register";
// import AdminRegister from "./pages/Register/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        {/* <Route exact path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/adminregister" element={<AdminRegister />} />
                <Route path="/google-login" element={<LoginGoogle />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
