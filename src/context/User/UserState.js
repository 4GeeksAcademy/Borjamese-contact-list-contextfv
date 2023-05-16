import React, { useReducer } from "react";
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
    try {
      const res = await axios.get('https://assets.breatheco.de/apis/fake/contact/agenda/borjamese-agenda')
      dispatch({
        type: 'GET_USERS',
        payload: res.data
      })
    } catch (error) {
      console.error(error);
    }
  }

  const getProfile = async (id) => {
    try {
      const res = await axios.get("https://assets.breatheco.de/apis/fake/contact/" + id);
      const { data } = res;
      
      dispatch({
        type: "GET_PROFILE",
        payload: data
      });
    } catch (error) {
      console.error(error);
    }
  };

  
  const deleteUser = async (id) => {
    try {
      await axios.delete(
        "https://assets.breatheco.de/apis/fake/contact/" + id
      );

      dispatch({
        type: "DELETE_USER",
        payload: id
      });
    } catch (error) {
      console.error(error);
    }
  };

  const updateUser = async (id, updatedUser) => {
    try {
      const res = await axios.put(
        `https://assets.breatheco.de/apis/fake/contact/${id}`,
        updatedUser
      );
      dispatch({
        type: "UPDATE_USER",
        payload: res.data
      });
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <UserContext.Provider value={{
      users: state.users,
      selectedUser: state.selectedUser,
      getUsers,
      getProfile,
      deleteUser,
      updateUser,
    }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState;
