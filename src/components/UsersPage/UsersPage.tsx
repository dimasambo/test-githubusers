import {FC, useEffect, useState} from "react";
import {getUsers} from "../../Redux/users/users-selector";
import {useDispatch, useSelector} from "react-redux";
import {UserType} from "../../types/types";
import {requestUsers} from "../../Redux/users/users-reducer";
import {Search} from "./Search/Search";
import {Users} from "./Users/Users";

type PropsType = {}

export const UsersPage: FC<PropsType> = ({}) => {

    const users = useSelector(getUsers)
    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(requestUsers())
    }, [])

    let [searchedUsers, setSearchedUsers] = useState<Array<UserType>>([])

    useEffect(() => {
        setSearchedUsers(users)
    }, [users])

    return <div style={{margin: "10px"}}>
        <Search users={users} setSearchedUsers={setSearchedUsers}/>
        <Users users={searchedUsers}/>
    </div>
}