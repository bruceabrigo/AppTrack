import React, { useState, Fragment } from 'react'
import { Route, Routes, Switch } from 'react-router-dom';
import Navbar from './components/shared/navbar';
import Home from './components/home';
import LogIn from './components/auth/login';
import SignOut from './components/auth/signout';

// import './App.css';

const App = () => {

  const [user, setUser] = useState(null)

	console.log('user in app', user)
	const clearUser = () => {
		console.log('clear user ran')
		setUser(null)
	}
 return (
  <>
    <Routes>
        <Route path="/" element={
            <>
              <Navbar user={user} />
              <Home />
            </>
          }
        />
        <Route path="/signin" element={<LogIn setUser={setUser}/>} />
        <Route path="/signout" element={<SignOut clearUser={clearUser} user={user}/>} />
    </Routes>
  </>
 )
}

export default App;
