import {FC} from "react";
import {UserType} from "../../../types/types";
import s from "./UserInfo.module.scss"

type PropsType = {
    user: UserType | null
}

export const UserInfo: FC<PropsType> = ({user}) => {
    return <div className={s.userInfoWrapper}>
        <div className={s.userPhotoBox}>
            <img src={user?.avatar_url}/>
        </div>
        <div className={s.mainUserInfoBox}>
            <div className={s.userLogin}>
                <span>{user?.login}</span>
            </div>
            <div className={s.reposFollowerBox}>
                <div className={s.reposFollow}>
                    <span className={s.reposFollowNumber}>{user?.public_repos}</span>
                    <span className={s.reposFollowText}>Repositories</span>
                </div>
                <div className={s.reposFollow}>
                    <span className={s.reposFollowNumber}>{user?.followers}</span>
                    <span className={s.reposFollowText}>Followers</span>
                </div>
                <div className={s.reposFollow}>
                    <span className={s.reposFollowNumber}>{user?.following}</span>
                    <span className={s.reposFollowText}>Following</span>
                </div>
            </div>
            <div className={s.aboutUserUl}>
                <ul>
                    <li>
                        <span className={s.liName}>Email: </span>
                        <span className={s.liDescription}>{user?.email ? user.email : "empty"}</span>
                    </li>
                    <li>
                        <span className={s.liName}>Bio: </span>
                        <span className={s.liDescription}>{user?.bio ? user.bio : "empty"}</span>
                    </li>
                    <li>
                        <span className={s.liName}>Location: </span>
                        <span className={s.liDescription}>{user?.location ? user.location : "empty"}</span>
                    </li>
                    <li>
                        <span className={s.liName}>Join date: </span>
                        <span className={s.liDescription}>{user?.created_at ? user.created_at : "empty"}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}