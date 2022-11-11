
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './Components/Navs/Navbar'
import ProtectRoutes from './helpers/ProtectRoutes'
import RedirectHome from './helpers/RedirectHome'
import { Balance } from './pages/Balance/Balance'
import { Error404 } from './pages/Error404'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Movements } from './pages/Movements'
import { Register } from './pages/Register'
import { Send } from './pages/Send/Send'

function App () {
  return (
    <Routes>
      <Route element={<RedirectHome/>}>
        <Route element={<Home/>}>
          <Route path='/Login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Route>
      <Route element={<ProtectRoutes />}>
        <Route element={<Navbar/>}>
          <Route path='/' element={<Balance />} />
          <Route path='/Movements' element={<Movements />} />
          <Route path='/send' element={<Send />} />
        </Route>
      </Route>
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}

export default App
