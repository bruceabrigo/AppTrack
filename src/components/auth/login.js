import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { signIn } from "../../api/auth";
import './login.scss'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const LogIn = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const onLogIn = (event) => {
        event.preventDefault()
        console.log('SignIn Props: ', props)
        const {setUser} = props

        const credentials = {email, password}

        signIn(credentials)
            .then((res) => setUser(res.data.user))
            .then(() => {
                console.log('Redirecting...');
                navigate('/');
            })
            .catch((error) => {
                console.error('Error during sign in:', error);
                setEmail('');
                setPassword('');
            });
    }

    return (
        <div className="background">
            <h1 className="greeting">Nice to See You Again!</h1>
            <div className="login">
                <h1>Welcome Back!</h1>
                    <Form onSubmit={onLogIn}>
                        <Form.Group controlId='email'>
                            <Form.Label>Your Email</Form.Label>
                            <Form.Control
                                required
                                type='email'
                                name='email'
                                value={email}
                                placeholder='Enter your email'
                                onChange={e => setEmail(e.target.value)}
                            />
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type='password'
                                name='password'
                                value={password}
                                placeholder='Enter your password'
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button className="m-2" variant='primary' type='submit'>
                            Login
                        </Button>
                    </Form>
            </div>
        </div>
    )
}

export default LogIn