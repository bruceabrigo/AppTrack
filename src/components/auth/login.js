import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../api/auth";
import './login.scss'

const LogIn = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const onLogIn = (event) => {
        event.preventDefault()
        console.log('SignIn Props: ', props)
        const {msgAlert, setUser} = props

        const credentials = {email, password}

        signIn(credentials)
            .then((res) => setUser(res.data.user))
			.then(() =>
				msgAlert({
					heading: 'Sign In Success',
					variant: 'success',
				})
			)
            .then(() => navigate('/'))
            .catch((error) => {
                setEmail('')
                setPassword('')
            })
    }

    return (
        <div className="background">
            <h1 className="greeting">Nice to See You Again!</h1>
            <div className="login">
                <h1>Welcome Back!</h1>
            </div>
        </div>
    )
}

export default LogIn