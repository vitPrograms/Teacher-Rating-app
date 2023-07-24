import { Link } from "react-router-dom"
import "./event.scss"

export default function CurrentEvent() {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="background-year unselectable">
                    2022
                </div>
                <ul className="event-list">
                    <Link to={"/1"} >
                        <li className="event-element">
                            <div className="block">
                                <div className="name" title="Нейлюк Ольга Андріївна">
                                    <p>Нейлюк</p>
                                    <p>Ольга</p>
                                    <p>Андріївна</p>
                                </div>
                                <div className="legend">Філософія / Психологія</div>
                            </div>
                            <div className="label">#1</div>
                            <div className="place-block">
                                <div className="circle gold"></div>
                            </div>
                        </li>
                    </Link>
                    <Link to={"/2"} >
                        <li className="event-element">
                            <div className="block">
                                <div className="name" title="Зікратий Сергій Вікторович">
                                    <p>Зікратий</p>
                                    <p>Сергій</p>
                                    <p>Вікторович</p>
                                </div>
                                <div className="legend">Алгоритм програмування / Англійська мова</div>
                                
                            </div>
                            <div className="label">#2</div>
                            <div className="place-block">
                                <div className="circle silver"></div>
                            </div>
                        </li>
                    </Link>
                    <Link to={"/3"} >
                        <li className="event-element">
                            <div className="block">
                                <div className="name" title="Демчина Микола Миколайович">
                                    <p>Демчина</p>
                                    <p>Микола</p>
                                    <p>Миколайович</p>
                                </div>
                                <div className="legend">Паралельні та розподілені обчислення ...</div>
                                
                            </div>
                            <div className="label">#3</div>
                            <div className="place-block">
                                <div className="circle bronze"></div>
                            </div>
                        </li>
                    </Link>
                    <li className="event-element">
                        <div className="main-label unselectable">ТОП<br />2022</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}