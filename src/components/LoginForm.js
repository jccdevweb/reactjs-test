import React, { useState } from "react";
const user ={
  username: "chachawao",
  password: "123456"
}


const LoginForm = () => {
  const [login, setLogIn] = useState({
    username: "",
    password: "",
  });

  const submitLogin = (e)=> {
    e.preventDefault();
   
    if (user.username !== login.username){
      alert('Invalid Username');
      return;
    }

    if (user.password !== login.password){
      alert('Invalid Password');
    }

    alert('Welcome User')

  }

  

  return (
    <form onSubmit={submitLogin}>
      <input
        palceholder="Username"
        type="text"
        value={login.username}
        onChange={(e) => setLogIn({ ...login, username: e.target.value })}
        required
      />

      <input
        palceholder="password"
        type="password"
        value={login.password}
        name="password"
        onChange={(e) => setLogIn({ ...login, password: e.target.value })}
        required
      />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
