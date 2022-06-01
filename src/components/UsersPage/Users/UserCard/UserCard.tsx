import {UserType} from "../../../../types/types";
import {FC} from "react";
import s from "./UserCard.module.scss"

type UserPropsType = {
    user: UserType
}

export const UserCard: FC<UserPropsType> = ({user}) => {

    return <div className={s.userCardWrapper}>
        <div className={s.userCardImgBox}>
            <img src={user.avatar_url}/>
        </div>
        <div className={s.userCardNameBox}>
            <span className={s.userCardInfoName}>Login</span>
            <span>{user.login}</span>
        </div>
        <div className={s.userCardReposBox}>
            <span className={s.userCardInfoName}>Number of repositories</span>
            {user.public_repos
                ? <span>{user.public_repos}</span>
                : <span className={s.noData}>There are no public_repos by https://api.github.com/users</span>
            }
        </div>
    </div>
}