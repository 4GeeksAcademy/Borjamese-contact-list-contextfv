import React, { useEffect, useContext, useState } from "react";
import UserContext from "../context/User/userContext";
import imghombre from "../img/imghombre.jpg";

const UserList = () => {
  const { users, getUsers, getProfile, deleteUser } = useContext(UserContext);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEdit = (user) => {
    setSelectedUser(user);
  };


  useEffect(() => {
    getUsers();
  }, []);

const handleClick = (id) => {
  getProfile(id);
}

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      await deleteUser(id);
    }
  };

  return (
    <div className="list-group h-100">
      <button type="button" className="btn btn-success" style={{ width: "30%" }}>
        Add new contact
      </button>
      {users.map((user) => (
        <div className="list-group-item list-group-item-action d-flex flex-row justify-content-start" key={user.id} onClick = {()=> handleClick(user.id)}>
          <img src={imghombre} className="img-fluid mr-5 rounded-circle" width="90" alt="User" />
          <div>
            <p>{user.full_name}</p>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
            <button onClick={() => handleEdit(user)}>Edit</button>
          </div>
        </div>
      ))}
    </div>
  );

  
};

export default UserList;
