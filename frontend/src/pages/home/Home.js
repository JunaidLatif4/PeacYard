import React from 'react';
import { useNavigate } from 'react-router';
import SiteConstants from '../../constants/SiteConstants';
import "./home.scss";

const Home = () => {
  const navigate = useNavigate();
  return (
    <section id="home">
        <div className='home-content'>
            <img src={SiteConstants.Logo} alt="logo" />
            <h1 className='home-tagline'> Memorial Designer & Configurator </h1>
            <p className='home-sub-text'> Client Application & Sales Application </p>
            <p className='home-para'>
              
            </p>
            <button className='theme-btn' onClick={()=>navigate("/login")}> Contact Us </button>
        </div>
    </section>
  )
}

export default Home;
