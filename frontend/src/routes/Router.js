import React from 'react'
import { Routes, Route } from 'react-router'
import Pages from '../pages'
const Router = () => {
  return (
    <>
        <Routes>
            <Route index element={<Pages.Home />} />
            <Route path='/login' element={<Pages.Login />} />
            <Route path='/app/design' element={<Pages.Design />} />
            <Route path='/admin/*' element={<Pages.Admin />} />
        </Routes> 
    </>
  )
}

export default Router
