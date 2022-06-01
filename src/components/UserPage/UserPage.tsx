import {FC, useEffect} from "react";
import { useHistory } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {requestUser} from "../../Redux/user/user-reducer";
import {getUser} from "../../Redux/user/user-selector";
import {UserInfo} from "./UserInfo/UserInfo";
import {RepositoriesList} from "./RepositoriesList/RepositoriesList";
import s from "./UserPage.module.scss"

type PropsType = {}

export const UserPage: FC<PropsType> = () => {

    let history = useHistory();
    let userLogin: string = history.location.pathname.substr(6) //delete "/user/"(6 symbols)

    const user = useSelector(getUser)

    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(requestUser(userLogin))
    }, [])

    return <div className={s.userPageWrapper}>
        <UserInfo user={user}/>
        <RepositoriesList user={user} />
    </div>
}