import React from 'react';
import './footer.css';

const name = "Kalyani kongala";
const footerContent = "All rights reserved";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <p>&copy; {currentYear} {name}. {footerContent}.</p>
        </footer>
    );
};

export default Footer;