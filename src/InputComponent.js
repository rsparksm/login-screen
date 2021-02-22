import React, { useState } from "react";

const InputComponent = (props) => {
  const [user, setUser] = useState("");
  const [pwd1, setPwd1] = useState("");
  const [pwd2, setPwd2] = useState("");

  const handleUserNameChange = (e) => {
    let userName = e.target.value;
    setUser(userName);
  };

  const handlePassword1Change = (e) => {
    let password = e.target.value;
    setPwd1(password);
  };

  const handlePassword2Change = (e) => {
    let password = e.target.value;
    setPwd2(password);
  };

  const handleSubmit = (e) => {
    if (checkPasswords()) {
      props.setUser(user);
      alert("Form submission successful");
      e.preventDefault();
    } else {
      alert("Form submission unsuccessful");
    }
  };

  const checkPasswords = () => {
    //check that passwords have length and match
    if (pwd1 != "" && pwd1 === pwd2) {
      return true;
    }
    return false;
  };

  return (
    <div className='input-body'>
      <form className='input-parent' onSubmit={handleSubmit}>
        <input
          className='input-field'
          type='usr'
          name='userName'
          placeholder='Enter username'
          onChange={handleUserNameChange}
        />

        <input
          className='input-field'
          type='password'
          name='password1'
          placeholder='Enter password'
          onChange={handlePassword1Change}
        />

        <input
          className='input-field'
          type='password'
          name='password2'
          placeholder='Confirm password'
          onChange={handlePassword2Change}
        />

        {pwd1 != "" ? (
          <div
            className={
              "alert " + (checkPasswords() ? "valid-pwd" : "invalid-pwd")
            }
          >
            {checkPasswords()
              ? "Password is valid and matches"
              : "Password is invalid or does not match"}
          </div>
        ) : null}
        <button className='submit-button' type='submit' onClick={handleSubmit}>
          {" "}
          Submit{" "}
        </button>
      </form>
    </div>
  );
};

export default InputComponent;
