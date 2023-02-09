import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

// MUI | ANT-D :
import { Avatar, Layout, Menu } from 'antd';

// Assets | ICONS :
import { BsBell, BsBoxArrowLeft, BsCalculator, BsCardImage, BsCart, BsFilePdf, BsHandThumbsUp, BsInfoCircleFill, BsPerson, BsSpeedometer } from 'react-icons/bs';
import { BiHelpCircle, BiMoney, BiSave } from 'react-icons/bi';
import { AiOutlineMail, AiOutlineCluster, AiOutlineBars, AiOutlineApi, AiFillSetting } from 'react-icons/ai';
import { FaLanguage, FaRegAddressCard, FaSteamSymbol, FaUsers } from 'react-icons/fa';
import { HiOutlineChevronDoubleLeft, HiOutlineChevronDoubleRight } from 'react-icons/hi';
import { RiRecycleFill } from 'react-icons/ri';

// Components :
import Dashboard from "./pages/dashboard/Dashboard";
import Design from './pages/design/Design';
import Reports from './pages/reports/Reports';
import HelpMenuModal from '../../components/HelpMenuModal/HelpMenuModal';
import InformationModal from '../../components/InformationModal/InformationModal';
import ProfileModal from '../../components/ProfileModal/ProfileModal';
import LogOutModal from '../../components/LogOutModal/LogOutModal';

// Helpers :
import SiteConstants from '../../constants/SiteConstants';

// CSS :
import "./admin.scss";






const { Content, Sider } = Layout;
const Admin = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [currentRoute, setCurrentRoute] = useState();

  const [openHelpModal, setOpenHelpModal] = useState(false)
  const [openInformationModal, setOpenInformationModal] = useState(false)
  const [openProfileModal, setOpenProfileModal] = useState(false)
  const [openLogoutModal, setOpenLogoutModal] = useState(false)

  useEffect(() => {
    let path = location.pathname?.replace(/(\/)/g, "")?.replace("admin", "")?.replace("-", " ");
    setCurrentRoute(path || "dashbaord");
  }, [location.pathname,]);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  function getItem(label, icon, children, type, key) {
    return {
      key: label,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem('Dashboard', <BsSpeedometer size={25} />),
    getItem('Reporting', <BsCalculator size={25} />),
    getItem('Designs', <BiSave size={25} />),
    getItem('Offers', <BsHandThumbsUp size={25} />),
    getItem('Orders', <BsCart size={25} />),
    getItem('Contacts', <FaRegAddressCard size={25} />),
    getItem('Messages', <AiOutlineMail size={25} />),
    getItem('Inovices', <BiMoney size={25} />),
    getItem('Products', <FaSteamSymbol size={25} />),
    getItem('Accounts', <FaUsers size={25} />),
    getItem('Sites', <AiOutlineCluster size={25} />),
    getItem('PDF Autofill', <BsFilePdf size={25} />),
    getItem('Media Library', <BsCardImage size={25} />),
    getItem('Languages', <FaLanguage size={25} />),
    getItem('API', <AiOutlineApi size={25} />),
    getItem('Logs', <AiOutlineBars size={25} />),
  ];

  const handleMenuClick = (menu) => {
    let path = menu?.key?.toLowerCase()?.split(" ").join("-");
    if (path === "dashboard") {
      navigate("/admin/");
      return;
    }
    navigate("/admin/" + path)
  }
  const handleHelpModal = () => {
    setOpenHelpModal(true)
  }
  const handleInformationModal = () => {
    setOpenInformationModal(true)
  }
  const handleProfileModal = () => {
    setOpenProfileModal(true)
  }
  const handleLogoutModal = () => {
    setOpenProfileModal(true)
  }


  return (
    <>
      <Layout hasSider>
        <Sider
          theme='light'
          trigger={null}
          collapsed={collapsed}
          breakpoint="lg"
          onCollapse={(collapsed) => setCollapsed(collapsed)}
          style={{
            backgroundColor: "var(--theme-color)",
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            zIndex: 100,
          }}
        >
          {
            !collapsed &&
            <div className='side-bar-top'>
              <div className='side-bar-logo'>
                <img src={SiteConstants.LogoBlack} alt="" />
              </div>
              <div className='user-area'>
                <Avatar icon={<BsPerson />} size={92} />
                <p>Username Title</p>
              </div>
            </div>
          }
          <Menu
            onClick={handleMenuClick}
            mode="inline"
            defaultSelectedKeys={['Dashboard']}
            className="antd-menu"
            items={items}
          />
          <div style={{ height: "50px" }} />
          <div className='side-footer'>
            <div className='side-footer-content'>
              <div className='text-center'>
                {
                  collapsed ?
                    <HiOutlineChevronDoubleRight onClick={toggleCollapsed} size={25} /> :
                    <HiOutlineChevronDoubleLeft onClick={toggleCollapsed} size={25} />
                }
              </div>
              <br />
              <div className='footer-actions' {...(collapsed ? { style: { flexDirection: "column" } } : {})}>
                <BsBoxArrowLeft size={25} onClick={handleLogoutModal} />
                <BiHelpCircle size={25} onClick={handleHelpModal} />
                <AiFillSetting size={25} onClick={handleProfileModal} />
                <BsInfoCircleFill size={25} onClick={handleInformationModal} />
                <RiRecycleFill size={25} />
              </div>
            </div>
          </div>
        </Sider>
        <Layout
          className="site-layout"
          style={{
            marginLeft: collapsed ? 80 : 200,
          }}
        >
          <Content>
            <div className='admin-content'>
              <div className='admin-header'>
                <h1 className='theme-text route-name'> {currentRoute} </h1>
                <button className='btn theme-text'>
                  <BsBell size={25} />
                </button>
              </div>
              <div className='admin-routes'>
                <Routes>
                  <Route index path='/' element={<Dashboard />} />
                  <Route index path='/reporting' element={<Reports />} />
                  <Route index path='/designs' element={<Design />} />
                </Routes>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
      <HelpMenuModal openModal={openHelpModal} setOpenModal={setOpenHelpModal} />
      <InformationModal openModal={openInformationModal} setOpenModal={setOpenInformationModal} />
      <ProfileModal openModal={openProfileModal} setOpenModal={setOpenProfileModal} />
      <LogOutModal openModal={openLogoutModal} setOpenModal={setOpenLogoutModal} />
    </>
  );
};
export default Admin;

