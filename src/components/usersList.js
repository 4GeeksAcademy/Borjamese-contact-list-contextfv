import React, { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../context/User/userContext";

const UserList = () => {
    const { users, getUsers, getProfile } = useContext(UserContext)


    useEffect(() => {
        getUsers();

    }, [])


    return (
        <div className="list-group h-100">
            {
                users.map(user => (
                    <a className="list-group-item list-group-item-action d-flex flex-row jutify-content-start" href="#!" key={user.id} onClick={() => getProfile(user.id)}>
                        <img src={user.avatar} className="img-fluid mr-5 rounded-circle" width="70" />
                        <div>
                            {user && user.first_name && <p>{user.first_name + " " + user.last_name}</p>}
                        </div>
                    </a>
                ))
            }
        </div>
    )

}

export default UserList