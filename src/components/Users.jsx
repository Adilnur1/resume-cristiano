import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../helpers/const";
import { Link } from "react-router-dom";

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
    <div className="main">
      <h1>Users Page</h1>
      {users.map((elem) => (
        <Link className="li" to={`/users/${elem.id}`} key={elem.id}>
          <h5>{elem.name}</h5>
        </Link>
      ))}
    </div>
  );
};

export default Users;
