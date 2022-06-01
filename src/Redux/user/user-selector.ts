import {AppStateType} from "./../redux-store";

export const getUser = (state: AppStateType) => {
    return state.user.user;
}

export const getUserRepositories = (state: AppStateType) => {
    return state.user.repos;
}