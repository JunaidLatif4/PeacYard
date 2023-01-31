import React from 'react';
import { BsCalculator, BsCardImage, BsCart, BsHandThumbsUp, BsSpeedometer, BsX } from 'react-icons/bs';
import { BiMoney, BiSave } from 'react-icons/bi';
import { AiOutlineMail, AiOutlineCluster, AiOutlineFilePdf, AiOutlineBars, AiOutlineApi } from 'react-icons/ai';
import { FaLanguage, FaRegAddressCard, FaSteamSymbol, FaUsers } from 'react-icons/fa';
import "./sidebar.scss";
import { Link } from 'react-router-dom';

const Sidebar = ({showCancelBtn = false, cancelBtnAction = ()=>{}}) => {
  return (
    <div id="side-bar">
      {
        showCancelBtn &&
        <div style={{textAlign: "right"}}>
          <BsX size={30} onClick={cancelBtnAction} className="simple-btn" style={{borderRadius: "50%"}} />
        </div>
      }
      <div className='side-bar-logo'>
        <img src={require("../../../../assets/img/dashbaord-logo.png")} alt="" />
      </div>
      <div className='user-area'>
        <img src={require("../../../../assets/img/user-img.png")} alt="" />
        <p>Username Title</p>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/admin">
              <BsSpeedometer className='icon' size={25} /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/reporting">
              <BsCalculator className='icon' size={25} /> Reporting
            </Link>
          </li>
          <li>
            <Link to="/admin/designs">
              <BiSave className='icon' size={25} /> Designs
            </Link>
          </li>
          <li>
            <Link to="/admin/offers">
              <BsHandThumbsUp className='icon' size={25} /> Offers
            </Link>
          </li>
          <li>
            <Link to="/admin/orders">
              <BsCart className='icon' size={25} /> Orders
            </Link>
          </li>
          <li>
            <Link to="/admin/contacts">
              <FaRegAddressCard className='icon' size={25} /> Contacts
            </Link>
          </li>
          <li>
            <Link to="/admin/messages">
              <AiOutlineMail className='icon' size={25} /> Messages
            </Link>
          </li>
          <li>
            <Link to="/admin/invoices">
              <BiMoney className='icon' size={25} /> Inovices
            </Link>
          </li>
          <br />
          <li>
            <Link to="/admin/products">
              <FaSteamSymbol className='icon' size={25} /> Products
            </Link>
          </li>
          <li>
            <Link to="/admin/accounts">
              <FaUsers className='icon' size={25} /> Accounts
            </Link>
          </li>
          <li>
            <Link to="/admin/sites">
              <AiOutlineCluster className='icon' size={25} /> Sites
            </Link>
          </li>
          <li>
            <Link to="/admin/pdf-autofill">
              <AiOutlineFilePdf className='icon' size={25} /> PDF Autofill
            </Link>
          </li>
          <li>
            <Link to="/admin/media-library">
              <BsCardImage className='icon' size={25} /> Media Library
            </Link>
          </li>
          <li>
            <Link to="/admin/languages">
              <FaLanguage className='icon' size={25} /> Languages
            </Link>
          </li>
          <br />
          <li>
            <Link to="/admin/api">
              <AiOutlineApi className='icon' size={25} /> API
            </Link>
          </li>
          <li>
            <Link to="/admin/logs">
              <AiOutlineBars className='icon' size={25} /> Logs
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
