import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/loading/Loading";
import TeacherList from "../components/teachers/TeacherList";
import TeachersListOptions from "../components/teachers/TeachersListOptions";
import { changeTeachers, selectSelectOption, selectSortOption } from "../features/teachers/teachersSlice";
import { selectUser } from "../features/user/userSlice";
import { ENDPOINT, SERVER } from "../config/server/serverConfig";

export default function TeachersPage() {
    const dispatch = useDispatch()
    const [isLoading, setLoading] = useState(true)
    const [isError, setError] = useState(false)
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(100)

    const [teachers, setTeachers] = useState([])
    const selectOption = useSelector(selectSelectOption)
    const sortOption = useSelector(selectSortOption)
    const student = useSelector(selectUser)


    const updateTeacherList = () => {
        const BASE_URL = SERVER.host
        const END_POINT = ENDPOINT.teacher
        const QUERY = `/search?select=${selectOption}&sort=${sortOption}&page=${page}&size=${size}`
        let options = {headers: {studentId: student?.id}}

        fetchNewTeachers(BASE_URL + END_POINT, QUERY, options)
    }

    const fetchNewTeachers = (BASE_URL, QUERY, options) => {
        fetch(BASE_URL + QUERY, options)
        .then(response => response.json())
        .then(data => {
            setTeachers(data)
            dispatch(changeTeachers(data))
            setLoading(false)
        })
        .catch(err => {
            setError(true)
        })
    }

    useEffect(() => {
        updateTeacherList()
    }, [sortOption, selectOption])

    if(isError) return <div>Щось пішло не так</div>
    if(isLoading) return <div>{<Loading />}</div>

    return (
        <>
            <TeachersListOptions />
            <TeacherList teachers={teachers} />
        </>
    )
}