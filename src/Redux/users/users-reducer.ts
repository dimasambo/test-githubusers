import {ReposType, UserType} from "../../types/types";
import {BaseThunkType, InferActionsTypes} from "../redux-store";
import {usersAPI} from "../../api/users-api";

let initialState = {
    users: [] as Array<UserType>
}

export type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case "USERS/SET_USERS":
            return {
                ...state,
                users: action.payload.users
            }
        default:
            return state;
    }
}

type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
    setUsers: (users: Array<UserType>) => ({type: 'USERS/SET_USERS', payload: {users}} as const)
}

type ThunkType = BaseThunkType<ActionsType>

export const requestUsers = (): ThunkType => {
    return async (dispatch) => {
        let data = await usersAPI.getUsers();
        dispatch(actions.setUsers(data));
    }
}

export default usersReducer;