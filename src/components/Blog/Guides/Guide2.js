import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import ServiceContact from '../../Services/ServiceContact';
import ServiceFooter from '../../Services/ServiceFooter';

const Guide2 = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20 px-2 lg:px-10 text-[#383841]'>
                <p className='w-full md:w-1/2 mx-auto text-left font-bold leading-none text-[40px] lg:text-[52px] mb-6'>How to Submit Your App's Latest Version for Review</p>
                <div className='w-full md:w-1/2 mx-auto mb-8'>
                    <div className='flex space-x-3 items-center'>
                        <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[150px] text-center'>
                            <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#guide</p>
                        </div>
                        <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[150px] text-center'>
                            <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#marketing</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mb-8'>
                    <img className='rounded-lg' src="https://messapps.com/wp-content/uploads/2016/08/markus-winkler-cxoR55-bels-unsplash-1200x567.jpg" alt="" />
                </div>
                <div className='w-full md:w-1/2 mx-auto text-lg lg:text-xl'>
                    <p className='mb-4'>1. Sign in to iTunes Connect with your Developer account and click My Apps on the main iTunes Connect dashboard; find and select the app to be updated
                        NOTE: Only users with an Admin, Technical, or App Manager role can add a new app version. Also, all certifications must be up-to-date before Apple will apply any changes to your app.

                        If you see a caution, then you might need to sign-in and address the issue first with a user that has a higher Role in your iTunes Connect dev team must already be deemed Ready for Sale by Apple before a new build can be added</p>
                    <p className='mb-4'>2. Now select + VERSION OR PLATFORM below Ready for Sale and select iOS</p>
                    <p className='mb-4'>3. Enter the new version number and hit Create</p>
                    <p className='mb-4'>4. After hitting Create, notice how only those properties that may be changed are editable. When updating a build, all information is automatically carried over onto your store’s page except for its description and screenshots. This is because Apple wants all amendments made to an app to be reflected whenever changes are made
                        If necessary, make sure you’ve made all changes the Build of your app by clicking Ready for Sale and locating and selecting the new Build.</p>
                </div>
                <ServiceContact></ServiceContact>
                <ServiceFooter></ServiceFooter>
            </div>
        </div>
    );
};

export default Guide2;