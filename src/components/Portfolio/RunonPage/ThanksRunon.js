import React from 'react';
import { Link } from 'react-router-dom';

const ThanksRunon = () => {
    return (
        <div className='flex flex-col items-center justify-center pt-10 mb-28'>
            <img className='w-[540px] mb-20' src="https://messapps.com/wp-content/themes/twentysixteen/samples/runon/run-thanks@2x.png" alt="" />
            <p className='font-bold text-2xl lg:text-3xl mb-6'>Download this app:</p>
            <Link to='/https://apps.apple.com/us/app/runon-run-better/id1353206378'>
                <img src="https://messapps.com/wp-content/themes/twentysixteen/samples/cakemix/badges.svg" alt="" />
            </Link>
        </div>
    );
};

export default ThanksRunon;