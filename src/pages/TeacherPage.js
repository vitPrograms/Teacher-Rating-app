import { React, useEffect, useState } from 'react'

import TeacherBlock from '../components/teacher_info/TeacherBlock';
import RateLineBlock from '../components/teacher_info/rateLine/RateLineBlock';
import CommentList from '../components/comments/CommentList/CommentList';
import Loading from '../components/loading/Loading'

import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { changeTeacherInfo } from '../features/teacher/teacherSlice';
import { selectUserId } from '../features/user/userSlice';
import { changeVotedStatus, selectVotedStatus } from '../features/votedStatus/votedStatusSlice';
import { setRate } from '../features/rate/rateSlice';
import Fail404 from '../components/fail/Fail404';
import { setFormTeacherId } from '../features/rate/formRateSlice';

export default function TeacherPage() {
    const isVoted = useSelector(selectVotedStatus)
    const dispatch = useDispatch()
    const { teacherId } = useParams()
    const [isLoading, setLoading] = useState(true)
    const [isError, setError] = useState(false)
    const [pageFound, setPageFound] = useState(true)
    const studentId = useSelector(selectUserId)

    useEffect(() => {
        fetchTeacher(teacherId)
        .then(response => response.json())
        .then(teacherData => {
            dispatch(changeTeacherInfo(teacherData))
            dispatch(setFormTeacherId(teacherId))
        })
        .catch(err => {
            setPageFound(false)
        })
    
        if(!pageFound || !teacherId) return
    
        fetchRate(studentId, teacherId)
        .then(response => response.json())
        .then((rate) => {
            dispatch(setRate(rate))
            dispatch(changeVotedStatus(true))
        })
        .catch(err => {
            dispatch(changeVotedStatus(false))
        })
        .finally(() => {
            setLoading(false)
        })
    }, [studentId, teacherId, pageFound, isVoted])

    if(isLoading) return <><Loading /> </>
    if(!pageFound) return <><Fail404 /> </>
    if(isError) return <>Error</>

    return <div>
        <TeacherBlock />
        <RateLineBlock />
        <CommentList />
    </div>
}

const API = 'http://localhost:8080/api';
const fetchTeacher = async (teacherId) => {
    return fetch(`${API}/teacher/${teacherId}`)
}

const fetchRate = async (studentId, teacherId) => {
    return fetch(`${API}/rate?studentId=${studentId}&teacherId=${teacherId}`)
}



