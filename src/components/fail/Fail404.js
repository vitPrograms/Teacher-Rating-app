import './fail.scss'

export default function Fail404() {
    const image = require('./error4042.png')
    return (
        <div className='fail-block unselectable'>
            <img src={image} alt="404"/>
            <div className='fail-message'>
                <h2>УПС!</h2>
                <p>Сторінку не знайдено</p>
            </div>
        </div>
    )
}