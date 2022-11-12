import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const RedirectHome = () => {
  const user = useSelector((state) => state.user)
  console.log(user)
  const token = localStorage.getItem('token')

  if (Object.keys(user).length === 0 || token) {
    return <Navigate to='/' replace={true} />
  }

  return <Outlet />
}

export default RedirectHome
