import React from 'react';
import { BsChat } from 'react-icons/bs';
import SiteConstants from '../../constants/SiteConstants';
import "./footer.scss";

const Footer = () => {
    return (
        <section id='footer'>
            <footer>
                <p className='copyright-text'> Copyright &#169; {SiteConstants.SiteName} 2022 </p>
            </footer>
            <button className='chat-btn theme-btn'>
                <BsChat size={20} /> &nbsp; Chat with us
            </button>
        </section>
    )
}

export default Footer
