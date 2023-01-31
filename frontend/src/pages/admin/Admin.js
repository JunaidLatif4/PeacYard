import React from 'react'
import Sidebar from './components/sidebar/Sidebar';
import "./admin.scss";
import Dashboard from './pages/dashboard/Dashboard';
import { FaBars } from 'react-icons/fa';
import { Route, Routes } from 'react-router';

const Admin = () => {

  const handleToggleSideBar = ()=>{
    const sidebar = document.getElementById("admin-mobile-side-bar");
    if(sidebar.style.width === "0px"){
      sidebar.style.width = "100%";
      return;
    }
    sidebar.style.width = "0px";
    return;
  }
  return (
    <section id="admin">
      <div className='admin-side-bar' style={{width: "250px"}}>
        <Sidebar />
      </div>
      <div className='admin-mobile-side-bar' id="admin-mobile-side-bar" style={{width: "0px"}}>
        <Sidebar showCancelBtn={true} cancelBtnAction={handleToggleSideBar} />
      </div>
      <div className='side-bar-toggler'>
        <FaBars size={30} onClick={handleToggleSideBar} />
      </div>
      <div className='admin-content'>
        <Routes>
          <Route index path='/' element={<Dashboard />} />
        </Routes>
      </div>
    </section>
  )
}

export default Admin;
