
import './App.css';
import Createaccount from './components/Createaccount.js';
import SignIn from './components/SignIn/SignIn';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import About from './components/About';
import UserProfile from './components/UI/UserProfile';
import Rent from './components/Rent';
import Contact from './components/Contact.js';
import Skills from './components/Skills';

function App() {

  const [jwttoken, setjwttoken] = useState(0)

  const [userProfile, setuserProfile] = useState(0)

  const [reloadKey, setReloadKey] = useState(1)


  

  const profileUpdate = async () => {

    let newProfile = await localStorage.getItem('userprofile')

    await setuserProfile(JSON.parse(newProfile))

    console.log(newProfile)

  }

  useEffect(() => {

    setjwttoken(localStorage.getItem("JWT"))
    setuserProfile(JSON.parse(localStorage.getItem("userprofile")))
    

  },[])

  const changeLogin = async () => {

    let token = await localStorage.getItem('JWT')

    setjwttoken(token)

    setReloadKey(Math.random())

  }

  const logoutProfile = async () => {

    await localStorage.removeItem("JWT")
    await localStorage.removeItem("userprofile")

    await setjwttoken(null)

    await setuserProfile(0)

    await setReloadKey(Math.random())

    window.location.href = "/"

  }


  return (
    <div>
      <Navbar key={reloadKey}  jwttoken={jwttoken}></Navbar>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="signin" element={<SignIn userProfile={userProfile} jwttoken={jwttoken} profileUpdate={profileUpdate} changeLogin={changeLogin} logoutProfile={logoutProfile}  />} />
          <Route path="createaccount" element={<Createaccount />} />
          <Route path="about" element={<About />} />
          <Route path="rent" element={<Rent />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
          <Route path="userprofile" element={<UserProfile userProfile={userProfile}  logoutProfile={logoutProfile}/>} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;