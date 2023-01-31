import React, { useState } from 'react'
import "./passwordrecover.scss"
const PasswordRecovery = () => {

  const [showPasswordInput, setShowPasswordInput] = useState(false);

  const toggleShowPasswordInput = () => {
    setShowPasswordInput(!showPasswordInput);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    toggleShowPasswordInput();
  }
  return (
    <section id="recover-password">
      <div className='recover-password-container'>
        <p>Password Recovery</p>
        {
          !showPasswordInput &&
          <>
            <div className='form-group'>
              <div>
                <label>Username</label>
              </div>
              <div>
                <input type="text" name="username" />
              </div>
            </div>
            <button type='button' onClick={handleSubmit} className='recover-btn theme-btn'> Recover my password </button>
          </>
        }
        {
          showPasswordInput &&
          <>
            <div className='form-group'>
              <div>
                <label>New Password</label>
              </div>
              <div>
                <input type="password" name="newPassword" />
              </div>
            </div>
            <div className='form-group'>
              <div>
                <label>Confirm Password</label>
              </div>
              <div>
                <input type="password" name="confirmPassword" />
              </div>
            </div>
            <button type='button' className='recover-btn theme-btn'> Update Password </button>
          </>
        }
      </div>
    </section>
  )
}

export default PasswordRecovery
