import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { path } from '../../config/client/path'
import { useSelector } from "react-redux";
import { selectAuthenticated } from "../../features/user/authenticationSlice";

export default function PrivateRoute({ component }) {
    const isAuthenticated = useSelector(selectAuthenticated)
    const location = useLocation()

    if(!isAuthenticated) {
        return <Navigate to={path.LOGIN} state={{from: location?.pathname}}/>
    }

    return component
}