import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/loading/Loading";
import TeacherList from "../components/teachers/TeacherList";
import TeachersListOptions from "../components/teachers/TeachersListOptions";
import TeacherBlock from "../components/teacher_info/TeacherBlock";
import { SELECT, SORT, changeTeachers, selectAllTeachers, selectSelectOption, selectSortOption } from "../features/teachers/teachersSlice";
import { selectUser } from "../features/user/userSlice";

export default function TeachersPage() {
    const dispatch = useDispatch()
    const [isLoading, setLoading] = useState(true)
    const [isError, setError] = useState(false)

    const [teachers, setTeachers] = useState([])
    const selectOption = useSelector(selectSelectOption)
    const sortOption = useSelector(selectSortOption)
    const student = useSelector(selectUser)

    // if(sortOption === SORT.STUDENTS) {
    //     setTeachers(teachers.sort())
    // }else if(sortOption === SORT.LOWRATE) {
    //     setTeachers(teachers.sort())
    // }else if(sortOption === SORT.HIGHRATE) {
    //     setTeachers(teachers.sort())
    // }

    const fetchTeachers = async (URL, limit = 12, option = {method: 'GET', headers: {'Content-Type': 'application/json'}}) => {
        return fetch(URL + `?limit=${limit}`, option)
            .then(response => response.json())
            .then(data => {
                if(data == null) console.log("Data not found!")
                console.log(data)
                return data
            })
            .catch(err => {
                setError(true)
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        const BASE_URL = 'http://localhost:8080/api/teacher'
        if(selectOption === SELECT.ALL) {
            fetchTeachers(BASE_URL + '/all').then(data => {
                setTeachers(data)
            })
        }else if(selectOption === SELECT.RATED) {
            fetchTeachers(BASE_URL + '/rated', 12, {headers: {studentId: student?.id}}).then(data => {
                setTeachers(data)
            })
        }else if(selectOption === SELECT.UNRATED) {
            fetchTeachers(BASE_URL + '/unrated', 12, {headers: {studentId: student?.id}}).then(data => {
                setTeachers(data)
            })
        }

        dispatch(changeTeachers(teachers))
    }, [TeachersListOptions])
    
    // useEffect(() => {
    //     toFetch().then((teachers) => {
    //         dispatch(changeTeachers(teachers))
    //         setLoading(false)
    //     })
    //     .catch(error => {
    //         setError(true)
    //         console.log(error)
    //     })
    //     .finally(() => {
    //         setLoading(false)
    //     })
    // }, [])


    if(isLoading == true) {
        setLoading(false)
    }

    if(isLoading) return <div>{<Loading />}</div>
    if(isError) return <div>Щось пішло не так</div>

    return (
        <>
            <TeachersListOptions />
            <TeacherList teachers={teachers} />
        </>
    )
}