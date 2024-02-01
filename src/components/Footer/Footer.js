import React from 'react';
import { FaLinkedinIn, FaGithub, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
    const date = new Date().getFullYear();
    console.log(date)

    return (
        <footer className="p-16 mt-16 text-white footer footer-center bg-gradient-to-t from-blue-950 to-black">
            <div>
                <p className="font-bold">
                    MD. Abdul Satter <br />Full stack web developer
                </p>
                <p>Copyright ©{date} -All right by abdulSatter</p>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href='https://github.com/AbdulSatterism'><svg width="32" height="32" viewBox="0 0 24 24" className="fill-current">
                        <FaGithub></FaGithub>
                    </svg></a>

                    <a href='https://www.linkedin.com/in/md-abdul-satter-ba10aa254/'><svg width="32" height="32" viewBox="0 0 24 24" className="fill-current">
                        <FaLinkedinIn></FaLinkedinIn>
                    </svg></a>
                    <a href='https://web.facebook.com/?stype=lo&jlou=Afc0A9CP8qAxqgOThyj6d8QWFE-o7JvxX4qhawmwPy_1wK5znn9jddW1rMsjChA8B9l_uLAQqMMvbj3-PaNEBTCsmJaqJsk6KZH7zh0ctn124A&smuh=63166&lh=Ac-yzUCTom9RIfuTj9Y'><svg width="32" height="32" viewBox="0 0 24 24" className="fill-current">
                        <FaFacebookF></FaFacebookF>
                    </svg></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;