import {ReposType, UserType} from "../../types/types";
import {BaseThunkType, InferActionsTypes} from "../redux-store";
import {usersAPI} from "../../api/users-api";

let initialState = {
    user: null as UserType | null,
    repos: null as Array<ReposType> | null
}

export type InitialStateType = typeof initialState

const userReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case "USERS/SET_USER":
            return {
                ...state,
                user: action.payload.user
            }
        case "USERS/SET_REPOSITORIES":
            return {
                ...state,
                repos: action.payload.repos
            }
        default:
            return state;
    }
}

type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
    setUser: (user: UserType) => ({type: 'USERS/SET_USER', payload: {user}} as const),
    setRepositories: (repos: Array<ReposType>) => ({type: 'USERS/SET_REPOSITORIES', payload: {repos}} as const)
}

type ThunkType = BaseThunkType<ActionsType>

export const requestUser = (userLogin: string): ThunkType => {
    return async (dispatch) => {
        let data = await usersAPI.getUser(userLogin);
        dispatch(actions.setUser(data));
    }
}

export const requestUserRepositories = (reposUrl: string): ThunkType => {
    return async (dispatch) => {
        let data = await usersAPI.getUserRepositories(reposUrl);
        dispatch(actions.setRepositories(data));
    }
}

export default userReducer;