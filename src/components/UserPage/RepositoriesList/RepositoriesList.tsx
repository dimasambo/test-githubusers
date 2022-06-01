import {FC, useEffect, useState} from "react";
import {ReposType, UserType} from "../../../types/types";
import {getUserRepositories} from "../../../Redux/user/user-selector";
import {useDispatch, useSelector} from "react-redux";
import {requestUserRepositories} from "../../../Redux/user/user-reducer";
import {RepositoryItem} from "./RepositoryItem/RepositoryItem";
import s from "./RepositoriesList.module.scss"
import {Search, SearchWithoutSubmit} from "../../UsersPage/Search/Search";

type PropsType = {
    user: UserType | null
}

export const RepositoriesList: FC<PropsType> = ({user}) => {

    const repositories = useSelector(getUserRepositories)

    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            // @ts-ignore
            dispatch(requestUserRepositories(user.repos_url))
        }
    }, [user])

    let [searchedRepositories, setSearchedRepositories] = useState<Array<ReposType>>([])

    useEffect(() => {
        if(repositories) {
            setSearchedRepositories(repositories)
        }
    }, [repositories])

    return <div className={s.repositoriesListWrapper}>
        <SearchWithoutSubmit repositories={repositories} setSearchedRepositories={setSearchedRepositories}/>
        {searchedRepositories.map(rep => <RepositoryItem key={rep.id} repository={rep}/>)}
    </div>
}