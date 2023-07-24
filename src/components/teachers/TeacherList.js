import { React } from "react";
import TeacherElement from "./TeacherElement";

import './teachers.scss'

export default function TeacherList(props) {
    const teachers = props.teachers

    const renderTeachers = () => {
        return teachers.map((teacher, id) => <TeacherElement key={id} teacher={teacher}/>)
    }

    return (
        <ul className="teacher-list" id="list">
            {renderTeachers()}
        </ul>
    )
}
