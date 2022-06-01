import axios from "axios";
import {ReposType, UserType} from "../types/types";


export const usersAPI = {
    getUsers() {
        return axios
            .get<Array<UserType>>
            (`https://api.github.com/users`)
            .then(responce => responce.data)
    },

    getUser(userLogin: string) {
        return axios
            .get<UserType>
            (`https://api.github.com/users/${userLogin}`)
            .then(responce => responce.data)
    },

    getUserRepositories(reposUrl: string) {
        return axios
            .get<Array<ReposType>>
            (`${reposUrl}`)
            .then(responce => responce.data)
    }
}