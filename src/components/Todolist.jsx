import React, { useEffect, useState } from "react";
import axios from "axios";

const Todolist = (props) => {
  const [me, setMe] = useState("user");

  const deleteToken = () => {
    localStorage.removeItem("token");
    window.location.replace("/");
  };

  const onClickLogout = () => {
    deleteToken();
  };

  const getMe = async () => {
    try {
      const response = await axios.get("http://localhost:3010/user/me", {
        headers: { token: props.token },
      });

      console.log(response);

      if (response.data.ok) {
        setMe(response.data.email);
      }
    } catch (error) {
      console.error(error);

      deleteToken();
    }
  };

  useEffect(() => {
    getMe();
  }, []);

  return (
    <>
      <div>{me}님 환영합니다!</div>
      <button onClick={onClickLogout}>로그아웃</button>
    </>
  );
};

export default Todolist;
