import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../helpers/const";

const Users = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const { data } = await axios(API);
    setUsers(data.results);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div
      className="main"
      style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
    >
      <center>
        <h1>Персонажи</h1>
      </center>
      {users.map((elem) => (
        <div>
          <h5 key={elem.id}>{elem.name}</h5>
          <img width={200} height={200} src={elem.url} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Users;
