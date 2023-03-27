import { React } from "react";
import TeacherElement from "./TeacherElement";

import './teachers.scss'

export default function TeacherList(props) {
    const teachers = props.teachers

    const renderTeachers = () => {
        return teachers.map((teacher) => <TeacherElement key={teacher.id} teacher={teacher}/>)
    }

    return (
            <ul className="teacher-list">
                {renderTeachers()}
            </ul>
    )
}
