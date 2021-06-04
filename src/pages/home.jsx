import React, { useEffect, useState } from "react";

import Login from "../components/Login";
import Todolist from "../components/Todolist";

const Home = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const getToken = localStorage.getItem("token");

    if (getToken) {
      setToken(getToken);
    }
  }, []);

  return <>{token ? <Todolist token={token} /> : <Login />}</>;
};

export default Home;
