import React from "react";
//import { useMoralis } from "react-moralis";
import { BrowserRouter, Routes,Route, Switch } from "react-router-dom";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
import Main from "./components/Main";
// import Upload from "./components/UploadDataModal";
// import Role from "./components/Role";

function App() {
  return (
  <div className="app">
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="upload" element={<Upload />} /> */}
        <Route path="/" element={<Main />} />
        {/* <Route path="role" element ={<Role />} /> */}
      </Routes>
    </BrowserRouter>
  </div>
  );
  
}

export default App;