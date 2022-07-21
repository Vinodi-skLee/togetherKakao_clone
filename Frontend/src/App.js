// import React from 'react';
import React, { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Login';
// import Login from "./pages/Login";
// import LoginGoogle from "./pages/Login/Googlebutton";
// import Admin from "./pages/Admin";
// import Register from "./pages/Register";
// import AdminRegister from "./pages/Register/Admin";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Main />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

function App() {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    fetch('/hello')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMessage(data);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        // 기본코드
        <ul>
          {message.map((v, idx) => (
            <li key={`${idx}-${v}`}>{v}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
