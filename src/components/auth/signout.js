import React from "react";
import './signout.scss'

// import api
import { signOut } from "../../api/auth";
import { useNavigate } from "react-router-dom";

const SignOut = (props) => {
    const {clearUser, user} = props
    console.log('Props in Sign Out: ', props)

    const navigate = useNavigate()

    const onSignOut = () => {
        signOut(user)
            .finally(() => navigate('/'))
            .finally(() => clearUser())
    }

    const onCancel = () => {
        navigate('/')
    }

    return (
        <>
            <h1>SignOut Page</h1>
        </>
    )
}

export default SignOut