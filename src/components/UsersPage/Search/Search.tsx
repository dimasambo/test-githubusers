import {ReposType, UserType} from "../../../types/types";
import {ChangeEvent, FC, useState} from "react";
import {Field, Form, Formik} from "formik";
import s from "./Search.module.scss"

type SearchPropsType = {
    users: Array<UserType>
    setSearchedUsers: (users: Array<UserType>) => void
}

type InitialValuesFormType = {
    value: string
}

export const Search: FC<SearchPropsType> =
    ({users, setSearchedUsers}) => {

        let [searchedValue, setSearchedValue] = useState('')

        const onFormSubmit = (values: InitialValuesFormType) => {
            setSearchedValue(values.value)

            setSearchedUsers(users.filter((user) => {
                    return user.login.toLowerCase().includes(values.value.toLowerCase())
                })
            )
        }

        return <div className={s.searchWrapper}>
            <Formik
                enableReinitialize
                initialValues={{value: searchedValue}}
                onSubmit={onFormSubmit}
            >
                <Form className={''}>
                    <Field type={"text"}
                           placeholder={"Search by user login"}
                           className={s.input}
                           name={"value"}/>
                    <button type="submit" className={s.button}>
                        Search
                    </button>
                </Form>
            </Formik>
        </div>
    }

type SearchWithoutSubmitPropsType = {
    repositories: Array<ReposType> | null,
    setSearchedRepositories: (repositories: Array<ReposType>) => void
}

export const SearchWithoutSubmit: FC<SearchWithoutSubmitPropsType> = ({repositories, setSearchedRepositories}) => {
    let [formValue, setFormValue] = useState('')

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormValue(e.target.value)
        if (repositories) {
            setSearchedRepositories(repositories.filter((rep) => {
                return rep.name.toLowerCase().includes(e.target.value.toLowerCase())
            }))
        }
    }

    return <div className={s.searchWrapper}>
        <form>
            <input type={"text"}
                   placeholder={"Search by repository name"}
                   className={s.input}
                   onChange={(e) => onInputChange(e)}/>
        </form>
    </div>
}