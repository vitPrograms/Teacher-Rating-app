import { GoogleLogin } from '@react-oauth/google'
import { useDispatch } from "react-redux"
import { setAuthentication } from '../../features/user/authenticationSlice'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import { message } from '../../config/client/message'

export default function GoogleAuthLogin({props}) {
    const dispatch = useDispatch()
    const googleLoginHandler = (response) => {
        dispatch(setAuthentication(response.credential))
        Cookies.set("token", response.credential)

        toast.success(message.successLogin)
    }

    const googleLoginErorrHandler = (error) => {
        console.error(error)
        toast.error(message.loginError)
    }

    return (
        <GoogleLogin
            onSuccess={googleLoginHandler}
            onError={googleLoginErorrHandler}
            theme='filled_blue'
            cancel_on_tap_outside={true}
            auto_select = {false}

        />
    )
}