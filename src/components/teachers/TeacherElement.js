import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "../../features/user/userSlice";
import { powers } from "../comments/powers";

export default function TeacherElement({teacher}) {

    const user = useSelector(selectUser)
    const [isRated, setRated] = useState(false)
    const [studentRate, setStudentRate] = useState(0)

    for(let el of user.ratedTeachers) {
        if(isRated === true) break

        if(el.id === teacher.id) {
            setRated(true)
            setStudentRate(el.rate)
            break
        }
    }

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
        <Link to={`/${teacher.id}`} className="teacher-link">
            <li className="teacher-element">
                <div className="teacher-element-block">
                    <div className="name">
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