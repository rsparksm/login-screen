import React, { useState } from "react";
import Header from "./Header";
import InputComponent from "./InputComponent";

const App = () => {
  const [user, setUser] = useState([]);
  const [pwd, setPwd] = useState([]);

  return (
    <div className='App'>
      <Header user={user} />

      <div className='app-body'>
        <div className='login-message'>Please Log In</div>
        <InputComponent setUser={setUser} setPwd={setPwd} />
      </div>
    </div>
  );
};

export default App;
