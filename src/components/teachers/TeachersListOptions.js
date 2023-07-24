import { useDispatch, useSelector } from "react-redux"
import { changeSelectOptionForTeacher, changeSortOptionForTeacher, selectSelectOption, selectSortOption} from "../../features/teachers/teachersSlice"
import { useEffect, useState } from "react"

export default function TeachersListOptions(props) {
    const [sortOrder, setSortOrder] = useState('asc')

    const dispatch = useDispatch()
    const selectOption = useSelector(selectSelectOption)
    const sortOption = useSelector(selectSortOption)

    const changeSelectOption = (e) => {
        const target = e.currentTarget
        const parent = target.parentNode
        parent.childNodes.forEach(element => {
            element.classList.remove("active")
        });
        dispatch(changeSelectOptionForTeacher(target.dataset.select))

        target.classList.add("active")
    }

    const changeSortOption = (e) => {
        const target = e.currentTarget
        const parent = target.parentNode

        if(sortOrder.includes('desc')) {
            setSortOrder('asc')
        } else {
            setSortOrder('desc')
        }

        parent.childNodes.forEach(element => {
            element.classList.remove("active")
        });
        target.classList.add("active")

        dispatch(changeSortOptionForTeacher(`${target.dataset.sort},${sortOrder}`))
    }

    const orderImg = (option) => option.includes('desc') ? "⬆️" : "⬇️"


    useEffect(() => {
        const optionContainer = document.querySelector('.option-container')
        const selectOptionList = optionContainer.querySelector('.select-option')
        const sortOptionList = optionContainer.querySelector('.sort-option')
        
        sortOptionList.childNodes.forEach(el => {
            if(sortOption == `${el?.dataset?.sort},asc` || sortOption == `${el?.dataset?.sort},desc`) el.classList.add('active')
            else el.classList.remove('active')
        })

        selectOptionList.childNodes.forEach(el => {
            if(selectOption == el?.dataset?.select) el.classList.add('active')
            else el.classList.remove('active')
        })

    }, [selectOption, sortOption])

    return (
        <div className="option-container unselectable">
            <ul className="select-option">
                <li data-select="all" className="option" onClick={changeSelectOption}>Всі</li>
                <li data-select="rated" className="option" onClick={changeSelectOption}>Оцінені</li>
                <li data-select="unrated" className="option" onClick={changeSelectOption}>Не оцінені</li>
            </ul>

            <ul className="sort-option">
                <li data-sort="studentsCount" className="option" onClick={changeSortOption}>
                    <span>Кількість студентів</span>
                    <span className="orderImg" >{orderImg(sortOption)}</span>
                </li>
                <li data-sort="rate" className="option" onClick={changeSortOption}>
                    <span>Оцінка</span>
                    <span className="orderImg" >{orderImg(sortOption)}</span>
                </li>
            </ul>
        </div>
    )
}