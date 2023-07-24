import React, { useEffect, useState } from 'react'
import { ENDPOINT, SERVER } from '../../../config/server/serverConfig'
import { useSelector } from 'react-redux'
import { selectUserTag } from '../../../features/user/userSlice'

export default function CommentAuthor({studentId}) {
    const[author, setAuthor] = useState({tag: 0})
    const studentTag = useSelector(selectUserTag)
    
    const fetchAuthor = () => {
        if(studentId === undefined || studentId === null) return
        const BASE_URL = SERVER.host
        const END_POINT = ENDPOINT.student
        const QUERY = `/${studentId}`

        const options = {
            method: "GET"
        }

        fetch(BASE_URL + END_POINT + QUERY, options)
        .then(response => response.json())
        .then(data => {
            setAuthor(data)
        })
        .catch(err => {
            console.log(err.message)
            setAuthor({tag: "Fail"})
        })
    }

    useEffect(() => {
        fetchAuthor()
    }, [])

    const isActiveStudent = () => author?.tag === studentTag

    return (
        <div className={`student-id`}>
            <span className={`${isActiveStudent() ? 'highlight' : null}`}>
                {isActiveStudent() ? (
                    "Ви"
                ) : (
                    `CF#${author?.tag}`
                )}
            </span>
        </div>
    )
}
