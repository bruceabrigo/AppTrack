import React, { useState, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/shared/navbar';
import Home from './components/home';
import LogIn from './components/auth/login';

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
    <Navbar user={user} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<LogIn/>}/>
      </Routes>
  </>
 )
}

export default App;
