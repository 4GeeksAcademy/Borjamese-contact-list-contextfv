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
        const res = await axios.get('https://reqres.in/api/users')
        console.log(res.data.data)
    }

    const getProfile = async (id) => {
        const res = await axios.get('https://reqres.in/api/users' + id)
        console.log(res)
    }

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