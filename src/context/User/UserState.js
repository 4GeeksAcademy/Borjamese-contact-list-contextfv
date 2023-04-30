import React, { useReducer, useState } from "react"
import UserReducer from './UserReducer'
import UserContext from "./userContext"
import axios from "axios"

const UserState = (props) => {
    const initialState = {
        users: [],
        selectedUser: null
    }

    const [state, dispatch] = useReducer(UserReducer, initialState)

    const getUsers = async () => {
        //es asincrona
        await axios.get('')
    }

    const getProfile = () => { }

    return (
        <UserContext.Provider value={{
            users: state.users,
            selectedUser: state.selectedUser,
            getUsers,
            getProfile
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState