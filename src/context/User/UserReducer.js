import { GET_USERS, GET_PROFILE } from "../types";

export default function (state, action) {
    const { payload, type } = action;

    switch (type) {
        case GET_USERS:
            return {
                ...state,
                users: payload
            }

        case GET_PROFILE:
            return {
                ...state,
                selectedUser: payload
            }
        case "DELETE_USER":
            return {
         ...state,
        users: state.users.filter((user) => user.id !== action.payload)
      };
      
      case 'UPDATE_USER':
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload.updatedUser : user
        ),
      };
        default:
            return state;
    }

}