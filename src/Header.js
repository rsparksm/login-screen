import React from "react";

const Header = (props) => {
  console.log(props.user);
  return (
    <div className='header-body'>
      <div className='welcome-message'>
        Welcome {props.user ? props.user : "user"}
      </div>
    </div>
  );
};

export default Header;
