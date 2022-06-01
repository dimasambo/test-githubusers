import {FC} from "react";
import {ReposType} from "../../../../types/types";
import s from "./RepositoryItem.module.scss"

type PropsType = {
    repository: ReposType
}

export const RepositoryItem: FC<PropsType> = ({repository}) => {
    return <div className={s.repositoryItemWrapper}>
        <a href={repository.html_url}>
            <div>
                <span className={s.repInfoName}>Name</span>
                <span>{repository.name}</span>
            </div>
            <div>
                <span className={s.repInfoName}>Number of stars</span>
                <span>{repository.stargazers_count}</span>
            </div>
            <div>
                <span className={s.repInfoName}>Number of forks</span>
                <span>{repository.forks_count}</span>
            </div>
        </a>
    </div>
}