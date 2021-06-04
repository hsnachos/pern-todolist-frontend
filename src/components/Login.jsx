import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post("http://localhost:3010/user/login", {
        email,
        password,
      });

      if (response.data.ok) {
        localStorage.setItem("token", response.data.token);
        window.location.replace("/");
      }

      console.log(response);
    } catch (error) {}
  };

  return (
    <>
      <h1>로그인 페이지</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="이메일"
          value={email}
          onChange={onChangeEmail}
        />
        <br />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={onChangePassword}
        />
        <br />
        <input type="submit" value="로그인" />
        <button>회원가입</button>
      </form>
    </>
  );
};

export default Login;
