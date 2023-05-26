import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import ErrorMaterialUI from './components/ErrorMaterialUI'
import NavDropDown from './components/dashboard/comonentsDashboard/nav/NavDropdown'

const RouteComponents = () =>
{
  return (
    <Routes>
      <Route path='/dashboard' element={ <Dashboard /> } />
      <Route path='/login' element={ <Login /> } />
      <Route path='/register' element={ <Register /> } />
      <Route path='/error' element={ <ErrorMaterialUI /> } />
      <Route path='/' element={ <Dashboard /> } />
      <Route path='/test' element={ <NavDropDown /> } />
    </Routes>

  )
}

export default RouteComponents