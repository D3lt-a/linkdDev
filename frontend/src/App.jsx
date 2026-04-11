import React from 'react'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import NotFound from './components/NotFound'

import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
