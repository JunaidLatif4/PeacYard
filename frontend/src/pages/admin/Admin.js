import React, { useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import { Avatar, Layout, Menu } from 'antd';
import { BsCalculator, BsCardImage, BsCart, BsFilePdf, BsHandThumbsUp, BsPerson, BsSpeedometer } from 'react-icons/bs';
import { BiMoney, BiSave } from 'react-icons/bi';
import { AiOutlineMail, AiOutlineCluster, AiOutlineBars, AiOutlineApi } from 'react-icons/ai';
import { FaLanguage, FaRegAddressCard, FaSteamSymbol, FaUsers } from 'react-icons/fa';
// import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import "./admin.scss";
import SiteConstants from '../../constants/SiteConstants';

const { Content, Sider } = Layout;
const Admin = () => {

  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  // const toggleCollapsed = () => {
  //   setCollapsed(!collapsed);
  // };

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


  return (
    <Layout hasSider>
      <Sider
        theme='light'
        trigger={null}
        // collapsed={collapsed}
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
        }}
      >
        {/* <div style={{ textAlign: collapsed ? "center" : "right", paddingTop: "10px" }}>
          <Button
            type="primary"
            onClick={toggleCollapsed}
            style={{
              marginBottom: 16,
            }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </div> */}
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
        <div style={{ height: "30px" }} />
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: collapsed ? 80 : 200,
        }}
      >
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
          }}
        >
          <Routes>
            <Route index path='/' element={<Dashboard />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Admin;

