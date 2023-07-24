import "./login.scss"
import { useSelector } from "react-redux";
import GoogleAuthLogin from "./GoogleAuthLogin";
import { path } from "../../config/client/path";
import { selectAuthenticated } from "../../features/user/authenticationSlice";
import { Link, Navigate, useLocation, useHistory, useMatch, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { message } from "../../config/client/message";

export default function Login({}) {
    const isAuthenticated = useSelector(selectAuthenticated)
    const location = useLocation()
    const intendedPath = location.state?.from || path.BASE;

    if(isAuthenticated) {
        toast.info(message.alreadyLogin, {
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        });

        return <>
            <Navigate to={intendedPath} />
        </>
    }

    return (
        <div className="login-container">
            <div className="modal">
                <div className="img-block">
                    <img src="https://ukd.edu.ua/themes/custom/bootstrap_ukd/images/logo_hor_white.svg" alt="UKD"/>
                </div>
                <div className="google-login">
                    <span className="message">Для подальшого використання сайту вам необхідно ввійти використовуючи <b>ukd.edu</b> пошту.</span>
                    <div className="btn"><GoogleAuthLogin /></div>
                </div>
                <div className="options">
                    <Link to={path.BASE} className="btn btn-primary">Головна</Link>
                    <Link to={path.HELP} className="btn btn-warning">Допомога</Link>
                </div>
            </div>
        </div>
    )
}
