import React, { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../context/User/userContext";
import imghombre from '../img/imghombre.jpg';

const UserList = () => {
    const { users, getUsers, getProfile } = useContext(UserContext)


    useEffect(() => {
        getUsers();

    }, [])


    return (
        <div className="list-group h-100">
            <button type="button" className="btn btn-success" style={{ width: '30%' }}>Add new contact</button>
            {
                users.map(user => (
                    <a className="list-group-item list-group-item-action d-flex flex-row jutify-content-start" href="#!" key={user.id} onClick={() => getProfile(user.id)}>
                        <img src={imghombre} className="img-fluid mr-5 rounded-circle" width="90" />
                        <div>
                            {<p>{user.full_name}</p>}
                            <button> Delete </button>
                            <button>Edit </button>

                        </div>
                    </a>
                ))
            }
        </div >
    )

}

export default UserList