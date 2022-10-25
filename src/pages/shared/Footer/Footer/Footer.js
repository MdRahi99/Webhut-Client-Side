import React from 'react';
import './Footer.css';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
            <div class="card text-center bg-light variant-light">
                <div class="card-footer">
                    <div className='d-flex justify-content-center gap-3 fs-3 py-3'>
                        <FaFacebook></FaFacebook>
                        <FaLinkedin></FaLinkedin>
                        <FaGithub></FaGithub>
                    </div>
                    <p className='text-muted'>All rights reserved @mdrahi</p>
                </div>
            </div>
    );
};

export default Footer;