import React from 'react';
import companyLogo1 from '../../images/Company/companys (1).png'
import companyLogo2 from '../../images/Company/companys (2).png'
import companyLogo3 from '../../images/Company/companys (3).png'
import companyLogo4 from '../../images/Company/companys (4).png'
import companyLogo5 from '../../images/Company/companys (5).png'
import companyLogo6 from '../../images/Company/companys (6).png'

const CorporatePartner = () => {

    return (
        <div>
            <h4 className='text-3xl font-bold text-center mb-6'>Our Corporate Partners</h4>
            <div className='grid grid-cols-3 md:grid-cols-6 gap-4'>
                <div>
                    <img className='w-20 mx-auto' src={companyLogo1} alt="" />
                </div>
                <div>
                    <img className='w-20 mx-auto' src={companyLogo2} alt="" />
                </div>
                <div>
                    <img className='w-20 mx-auto' src={companyLogo3} alt="" />
                </div>
                <div>
                    <img className='w-20 mx-auto' src={companyLogo4} alt="" />
                </div>
                <div>
                    <img className='w-20 mx-auto' src={companyLogo5} alt="" />
                </div>
                <div>
                    <img className='w-20 mx-auto' src={companyLogo6} alt="" />
                </div>

            </div>
        </div>
    );
};

export default CorporatePartner;