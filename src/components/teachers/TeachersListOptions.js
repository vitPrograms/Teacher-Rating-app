import { useDispatch, useSelector } from "react-redux"
import { changeSelectOptionForTeacher, changeSortOptionForTeacher} from "../../features/teachers/teachersSlice"

export default function TeachersListOptions() {
    const dispatch = useDispatch()

    const changeSelectOption = (e) => {
        const target = e.target
        if(target.parentNode.localName !== "ul") return

        const parent = target.parentNode
        parent.childNodes.forEach(element => {
            element.classList.remove("active")
        });
        dispatch(changeSelectOptionForTeacher(target.dataset.select))

        target.classList.add("active")
    }

    const changeSortOption = (e) => {
        const target = e.target
        if(target.parentNode.localName !== "ul") return

        const parent = target.parentNode
        parent.childNodes.forEach(element => {
            element.classList.remove("active")
        });
        dispatch(changeSortOptionForTeacher(target.dataset.sort))

        target.classList.add("active")
    }

    // const user = useSelector(selectUser)

    // const selectOption = useSelector(selectSelectOption)
    // const sortOption = useSelector(selectSortOption)

    // useEffect(() => {
    //     console.log(selectOption)
    //     if(selectOption === 'rated') {
    //         setTeachers(ratedFilter(user, teachers))
    //     }

    // }, [])

    // const ratedFilter = (user, teachers) => {
    //     const ratedTeachers = user.ratedTeachers
    //     const ids = Object.keys(ratedTeachers)
    //     teachers.filter(t => {
    //         ids.includes(t.id)
    //     })
        
    //     return teachers
    // }

    return (
        <div className="option-container unselectable">
            <ul className="select-option" onClick={changeSelectOption}>
                <li data-select="all" className="option active">Всі</li>
                <li data-select="rated" className="option">Оцінені</li>
                <li data-select="unrated" className="option">Не оцінені</li>
            </ul>

            <ul className="sort-option" onClick={changeSortOption}>
                <li data-sort="studentsCount" className="option active">Кількість студентів</li>
                <li data-sort="lowRate" className="option">Нищий бал</li>
                <li data-sort="highRate" className="option">Вищий бал</li>
            </ul>
        </div>
    )
}