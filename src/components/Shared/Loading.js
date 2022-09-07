import React from 'react';
import { SlidingPebbles } from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css'


const Loading = () => {
    return (
        <div className='h-screen flex justify-center items-center bg-white'>
            <img className='w-full' src="https://cdn.dribbble.com/users/2077073/screenshots/6005120/loadin_gif.gif" alt="" />            {/* <SlidingPebbles bgColor={"#ffffff"}
                center={false} width={"100px"} height={"100px"} /> */}
        </div>

    );
};

export default Loading;
