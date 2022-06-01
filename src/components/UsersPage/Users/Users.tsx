import {UserType} from "../../../types/types";
import {FC} from "react";
import {UserCard} from "./UserCard/UserCard";
import { Link } from "react-router-dom";
import s from "./UserCard/UserCard.module.scss";


type UsersPropsType = {
    users: Array<UserType>
}

export const Users: FC<UsersPropsType> = ({users}) => {
    return <div className={s.usersWrapper}>
        {
            users.map(user => <Link className={s.userCardWrapperLink} to={'/user/' + user.login}><UserCard key={user.id} user={user}/></Link>)
        }
    </div>
}