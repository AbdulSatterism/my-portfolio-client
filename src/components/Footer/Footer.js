import React from 'react';
import { FaLinkedinIn, FaGithub, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer data-theme="luxury" className="p-16 text-white footer footer-center">
            <div>
                <p className="font-bold">
                    MD. Abdul Satter <br />Full stack web developer
                </p>
                <p>Copyright © 2023 - All right by abdulSatter</p>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href='https://github.com/'><svg width="32" height="32" viewBox="0 0 24 24" className="fill-current">
                        <FaGithub></FaGithub>
                    </svg></a>

                    <a href='https://www.linkedin.com/in/md-abdul-satter-ba10aa254/'><svg width="32" height="32" viewBox="0 0 24 24" className="fill-current">
                        <FaLinkedinIn></FaLinkedinIn>
                    </svg></a>
                    <a href=''><svg width="32" height="32" viewBox="0 0 24 24" className="fill-current">
                        <FaFacebookF></FaFacebookF>
                    </svg></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;