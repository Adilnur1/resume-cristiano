import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../helpers/const";

const UserDitails = () => {
  const { id } = useParams();
  const [user, setUser] = useState("");
  const getUser = async () => {
    const { data } = await axios(`${API}/${id}`);
    setUser(data);
    console.log(data);
  };
  console.log(id);
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="mainDitails">
      <h1>{user.name}</h1>
      <img src={user.image} alt="" />
    </div>
  );
};

export default UserDitails;
