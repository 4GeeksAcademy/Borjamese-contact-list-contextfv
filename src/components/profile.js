import React, { useContext } from "react";
import UserContext from "../context/User/userContext";


const Profile = () => {

    const { selectedUser } = useContext(UserContext);
    return (
        <>
            {selectedUser ? (<div className="card card-body text-center">

                <h1>{selectedUser.full_name}</h1>
                <h3>email: {selectedUser.email}</h3>
                <h3>phone: {selectedUser.phone} </h3>
                <h3>address {selectedUser.address}</h3>
            </div>) : (<h1> No user selected </h1>)}
        </>
    )

}

export default Profile