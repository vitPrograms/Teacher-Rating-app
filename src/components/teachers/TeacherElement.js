import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUserId } from "../../features/user/userSlice";
import { powers } from "../comments/powers";
import { ENDPOINT, SERVER } from "../../config/server/serverConfig";

export default function TeacherElement({teacher}) {

    const userId = useSelector(selectUserId)
    const [isRated, setRated] = useState(false)
    const [studentRate, setStudentRate] = useState(0)

    const fetchStudentRate = () => {
        const BASE_URL = SERVER.host
        const RATE_PATH = ENDPOINT.rate

        fetch(BASE_URL + RATE_PATH + `?studentId=${userId}&teacherId=${teacher.id}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                setRated(false)
                setStudentRate(0)
            }
        })
        .then(data => {
            setStudentRate(data?.rate)
            setRated(true)
        })
        .catch(err => {
            setRated(false)
            setStudentRate(0)
        })
    }

    useEffect(() => {
        fetchStudentRate()
    }, [userId, teacher.id])

    const getAverageRate = () => {
        return teacher?.averageRate?.toFixed(2)
    }

    const getStudentRatedCount = () => {
        return teacher.rates.length
    }

    const getTeacherFullName = () => {
        return teacher.fullname
    }
    
    const getTeacherSubjects = () => {
        return teacher.subjects
    }

    return (
        <Link key={teacher.id} to={`/${teacher.id}`} className={`teacher-link`}>
            <li className={`teacher-element`}>
                <div className="teacher-element-block">
                    <div className="name">
                        {teacher.id}
                        {getTeacherFullName()}
                    </div>
                    <div className="legend">
                        {getTeacherSubjects()}
                    </div>
                    <div className="footer">
                        <div className="voted-students">
                            <span>🧑‍🎓{getStudentRatedCount()}</span>
                        </div>
                        {
                            (isRated)
                            ? <div className="student-rate"><span className={powers[studentRate]}>{studentRate}</span></div>
                            : null
                        }
                            
                    </div>
                </div>
                <div className="average-rate">
                    <span className="rate-data">
                        {getAverageRate()}
                    </span>
                    <span className="max-rate">/5</span>
                </div>
            </li>
        </Link>
    )
}