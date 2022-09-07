import React from 'react';
import logo1 from '../../images/Logo1.png'
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 text-base-content">
                <div>
                    <img className='w-36' src={logo1} alt="" />
                    <p>TeaTree Industries Ltd.<br />Organic tea since 1995</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a href='*' className="link link-hover">Branding</a>
                    <a href='*' className="link link-hover">Design</a>
                    <a href='*' className="link link-hover">Marketing</a>
                    <a href='*' className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a href='*' className="link link-hover">About us</a>
                    <a href='*' className="link link-hover">Contact</a>
                    <a href='*' className="link link-hover">Jobs</a>
                    <a href='*' className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://reliable-selkie-d26cc7.netlify.app/"><AiFillFacebook className='text-xl text-blue-500'></AiFillFacebook></a>
                        <a href="https://github.com/Khalidprithy"><AiFillGithub className='text-xl'></AiFillGithub></a>
                        <a href="https://www.linkedin.com/in/khalidbinalam/"><AiFillLinkedin className='text-xl text-blue-400'></AiFillLinkedin></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;