import React from 'react';
import { DoubleBubble } from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css'


const Loading = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <DoubleBubble bgColor={"#16a34a"}
                center={false} width={"100px"} height={"100px"} />
        </div>

    );
};

export default Loading;