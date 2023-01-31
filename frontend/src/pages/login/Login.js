import React, { useState } from 'react'
import SiteConstants from '../../constants/SiteConstants';
import PasswordRecovery from '../passwordRecovery/PasswordRecovery';
import { BsX } from "react-icons/bs"
import "./login.scss";
import { useNavigate } from 'react-router';
const Login = () => {

  const navigate = useNavigate();
  const [recoverPasswordPopup, setRecoverPasswordPopup] = useState(false);
  const [showAuthCode, setShowAuthCode] = useState(false);

  const [user, setUser] = useState({
    username: "",
    password: "",
  })

  const toggleRecoverPasswordPopup = ()=>{
    setRecoverPasswordPopup(!recoverPasswordPopup);
  }

  const handleInputs = (event)=>{
    let name = event.target.name, value = event.target.value;
    setUser({...user, [name]:value});
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    setShowAuthCode(true);
    if(showAuthCode){
      navigate("/admin") 
    }
  }

  return (
    <section id="login">
      <div className='login-content'>
        <img src={SiteConstants.Logo} alt="logo" />
        <div className='login-container'>
          <p> Login </p>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <div>
                <label>Username</label>
              </div>
              <div>
                <input type="text" name="username" onChange={handleInputs} required />
              </div>
            </div>
            <div className='form-group'>
              <div>
                <label>Password</label>
              </div>
              <div>
                <input type="password" name="password" onChange={handleInputs} required />
              </div>
            </div>
            {
              showAuthCode &&
              <div className='auth-code-div'>
                <h4>Heads up!</h4>
                <p>
                  Your account has <a href="#login">2-Factor-Authentication</a> &nbsp;
                  enabled, Please enter your authentication
                  code below to continue your login
                </p>
                <div className='form-group'>
                <div>
                  <label>Authentication code</label>
                </div>
                <div>
                  <input type="text" />
                </div>
                <div className='auth-device-div'>
                  <a href="#login"> Authentication Device missing or broken? </a>
                </div>
              </div>
              </div>
            }
            <button type='submit' className='login-btn'> Login </button>
            {
              recoverPasswordPopup &&
              <div className='recover-password-popup'>
                <div className='recover-password-close-btn-div'>
                  <button type='button' onClick={toggleRecoverPasswordPopup}>
                    <BsX size={20}/>
                  </button>
                </div>
                <PasswordRecovery />
              </div>
            }
            <div className='forgot-link'>
              <a href="#login" onClick={toggleRecoverPasswordPopup}> Forgot Username or Password </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
