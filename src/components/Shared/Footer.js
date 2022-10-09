import React from 'react';
import logo1 from '../../images/Logo1.png'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 text-base-content">
                <div>
                    <img className='w-36 lg:w-64' src={logo1} alt="" />
                    <p className='text-base lg:text-2xl'>TeaTree Industries Ltd.<br />Organic tea since 1995</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a href='*' className="link link-hover text-xl lg:text-2xl">Branding</a>
                    <a href='*' className="link link-hover text-xl lg:text-2xl">Design</a>
                    <a href='*' className="link link-hover text-xl lg:text-2xl">Marketing</a>
                    <a href='*' className="link link-hover text-xl lg:text-2xl">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a href='*' className="link link-hover text-xl lg:text-2xl">About us</a>
                    <a href='*' className="link link-hover text-xl lg:text-2xl">Contact</a>
                    <a href='*' className="link link-hover text-xl lg:text-2xl">Jobs</a>
                    <a href='*' className="link link-hover text-xl lg:text-2xl">Press kit</a>
                </div>
                <div>
                    <span className="footer-title text-3xl">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://reliable-selkie-d26cc7.netlify.app/"><BsFillPersonLinesFill className='text-xl lg:text-4xl text-blue-500'></BsFillPersonLinesFill></a>
                        <a href="https://github.com/Khalidprithy"><AiFillGithub className='text-xl lg:text-4xl'></AiFillGithub></a>
                        <a href="https://www.linkedin.com/in/khalidbinalam/"><AiFillLinkedin className='text-xl lg:text-4xl text-blue-400'></AiFillLinkedin></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;