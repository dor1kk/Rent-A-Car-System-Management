import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/SignIn'
import Register from './pages/Register'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<Home />}></Route>
        <Route path='/sign-in' element={<SignIn />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </div>
  )
}

export default App
