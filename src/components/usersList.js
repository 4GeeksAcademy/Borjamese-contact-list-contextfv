import React, { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../context/User/userContext";

const UserList = () => {
    const { getUsers } = useContext(UserContext)

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div>
            user list
        </div>
    )

}

export default UserList