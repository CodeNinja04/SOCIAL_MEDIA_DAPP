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
      <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>
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