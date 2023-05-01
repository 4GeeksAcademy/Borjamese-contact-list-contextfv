import React, { useContext } from "react";
import UserContext from "../context/User/userContext";


const Profile = () => {

    const { selectedUser } = useContext(UserContext);
    return (
        <>
            {selectedUser ? (<div>
                <img src={selectedUser.avatar} alt="" />
                <h1>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1>
                <h3>email: {selectedUser.email}</h3>
            </div>) : (<h1> No user selected </h1>)}
        </>
    )

}

export default Profile