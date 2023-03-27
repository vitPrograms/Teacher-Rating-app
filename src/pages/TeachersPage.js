import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/loading/Loading";
import TeacherList from "../components/teachers/TeacherList";
import TeachersListOptions from "../components/teachers/TeachersListOptions";
import TeacherBlock from "../components/teacher_info/TeacherBlock";
import { changeTeachers, selectAllTeachers } from "../features/teachers/teachersSlice";

export default function TeachersPage() {
    const dispatch = useDispatch()
    const [isLoading, setLoading] = useState(true)
    const [isError, setError] = useState(false)

    
    const teachers = useSelector(selectAllTeachers)

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

const toFetch = async () => {
    const API = 'http://localhost:8080/api/teacher';
  
    return fetch(API)
        .then(response => response.json())
        .then(data => {
            if(data == null) console.log("Data not found!")
            return data
        })
} 