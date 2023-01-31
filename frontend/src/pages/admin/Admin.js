import React, { useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import { Layout, Menu } from 'antd';
import { BsCalculator, BsCardImage, BsCart, BsFilePdf, BsHandThumbsUp, BsSpeedometer } from 'react-icons/bs';
import { BiMoney, BiSave } from 'react-icons/bi';
import { AiOutlineMail, AiOutlineCluster, AiOutlineBars, AiOutlineApi } from 'react-icons/ai';
import { FaLanguage, FaRegAddressCard, FaSteamSymbol, FaUsers } from 'react-icons/fa';
// import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import "./admin.scss";

const { Content, Sider } = Layout;
const Admin = () => {

  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  // const toggleCollapsed = () => {
  //   setCollapsed(!collapsed);
  // };

  function getItem(label, key, icon, children, type) {
    return {
      key: label,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem('Dashboard', '1', <BsSpeedometer size={25} />),
    getItem('Reporting', '2', <BsCalculator size={25} />),
    getItem('Designs', '3', <BiSave size={25} />),
    getItem('Offers', '4', <BsHandThumbsUp size={25} />),
    getItem('Orders', '5', <BsCart size={25} />),
    getItem('Contacts', '6', <FaRegAddressCard size={25} />),
    getItem('Messages', '7', <AiOutlineMail size={25} />),
    getItem('Inovices', '8', <BiMoney size={25} />),
    getItem('Products', '9', <FaSteamSymbol size={25} />),
    getItem('Accounts', '10', <FaUsers size={25} />),
    getItem('Sites', '11', <AiOutlineCluster size={25} />),
    getItem('PDF Autofill', '12', <BsFilePdf size={25} />),
    getItem('Media Library', '13', <BsCardImage size={25} />),
    getItem('Languages', '14', <FaLanguage size={25} />),
    getItem('API', '15', <AiOutlineApi size={25} />),
    getItem('Logs', '16', <AiOutlineBars size={25} />),
  ];

  const handleMenuClick = (menu)=>{
    let path = menu?.key?.toLowerCase()?.split(" ").join("-");
    if(path === "dashboard"){
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
        onCollapse={(collapsed)=>setCollapsed(collapsed)}
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
        <div className='side-bar-top'>
          {
            !collapsed &&
            <>
              <div className='side-bar-logo'>
                <img src={require("../../assets/img/dashbaord-logo.png")} alt="" />
              </div>
              <div className='user-area'>
                <img src={require("../../assets/img/user-img.png")} alt="" />
                <p>Username Title</p>
              </div>
            </>
          }
        </div>
        <Menu
          onClick={handleMenuClick}
          mode="inline"
          defaultSelectedKeys={['1']}
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

