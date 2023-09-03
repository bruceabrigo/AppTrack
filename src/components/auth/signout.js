import React from "react";
import './signout.scss'

// import api
import { signOut } from "../../api/auth";
import { Link, useNavigate } from "react-router-dom";

const SignOut = (props) => {
    const {clearUser, user} = props
    console.log('Props in Sign Out: ', props)

    const navigate = useNavigate()

    const onSignOut = () => {
        signOut(user)
            .finally(() => navigate('/signin'))
            .finally(() => clearUser())
    }

    return (
        <>
            <h1>Are you sure you want to sign out?</h1>
            <Link to="/">Back</Link>
            <button onClick={onSignOut}>Sign out</button>
        </>
    )
}

export default SignOut