import React from 'react';
import SiteConstants from '../../constants/SiteConstants';
import "./footer.scss";

const Footer = () => {
    return (
        <section id='footer'>
            <footer>
                <p className='copyright-text'> Copyright &#169; {SiteConstants.SiteName} 2022 </p>
            </footer>
            <button className='chat-btn theme-btn'>
                Chat
            </button>
        </section>
    )
}

export default Footer
