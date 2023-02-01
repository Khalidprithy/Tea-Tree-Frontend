import React, { useRef } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { MdEmail, MdLocationPin } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yjyfszl', 'template_l26d6fj', form.current, '9CH62NioqIjo3L1fc')
            .then((result) => {
                toast.success('Email sent successfully')
            }, (error) => {
                toast.error('Could not sent Email, Try again')
            });
    };


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 bg-white pt-10'>
            <div className='bg-white pb-6 w-11/12 lg:w-8/12 mx-auto'>
                <div className='p-10'>
                    <h1 className='text-2xl md:text-4xl xl:text-5xl font-semibold'>Let's get in touch</h1>
                    <p className='text-base lg:text-xl p-2'>We'er open for any suggestions or just to have a chat.</p>
                </div>
                <div className='flex flex-col gap-4 pl-8'>
                    <div className='flex items-center gap-2'>
                        <FiPhoneCall className='text-blue-400 text-2xl'></FiPhoneCall>
                        <p className='text-xl xl:text-2xl'>01455321487</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <MdEmail className='text-secondary text-2xl'></MdEmail>
                        <p className='text-xl xl:text-2xl'>khalidprithy@gmail.com</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <MdLocationPin className='text-orange-400 text-2xl'></MdLocationPin>
                        <p className='text-xl xl:text-2xl'>Mohammodpur, Dhaka</p>
                    </div>
                </div>
            </div>
            <div className='bg-secondary w-11/12 lg:w-8/12 mx-auto rounded-lg m-4'>
                <div className="p-4 mt-4">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='flex my-2'>
                            <input className='h-12 lg:h-14 rounded-md py-1 px-3 w-full md:w-3/4' placeholder='Name' type="text" name="user_name" required autoComplete="off" />
                        </div>
                        <div className='flex my-2'>
                            <input className='h-12 lg:h-14 rounded-md px-3 py-1 w-full md:w-3/4' placeholder='Email' type="email" name="user_email" required autoComplete="off" />
                        </div>
                        <div className='flex flex-col my-2'>
                            <textarea className='rounded-md px-3 mt-1 h-24' placeholder='Message' name="message" />
                        </div>
                        <input className='btn btn-sm lg:btn-md btn-outline text-white rounded-lg mb-2' type="submit" value="Send message" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;