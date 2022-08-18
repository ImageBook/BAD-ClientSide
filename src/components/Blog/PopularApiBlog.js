import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
// import { FaUserCircle } from 'react-icons/fa';
import ServiceContact from '../Services/ServiceContact';
import ServiceFooter from '../Services/ServiceFooter';

const PopularApiBlog = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 md:w-5/6 lg:w-11/12 xl:w-5/6 2xl:w-full mx-auto my-10 lg:my-20 px-2 lg:px-10 text-[#383841]'>
                <p className='w-full md:w-1/2 mx-auto text-left font-bold leading-none text-[40px] lg:text-[52px] mb-6'>Top 6 Most Popular APIs for Building An SEO Software</p>
                <div className='w-full md:w-1/2 mx-auto mb-8'>
                    <div className='flex space-x-3 items-center'>
                        <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[150px] text-center'>
                            <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#allcategories</p>
                        </div>
                        <div className='border bg-[#FAFAFA] rounded-lg py-2 inline-block w-[150px] text-center'>
                            <p className='text-gray-700 hover:text-[#cc0ccf] transition duration-300 ease-in-out'>#development</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mb-8'>
                    <img className='rounded-lg' src="https://messapps.com/wp-content/uploads/2022/03/seo-apis-1200x423.png" alt="" />
                </div>
                <div className='w-full md:w-1/2 mx-auto text-lg lg:text-xl'>
                    <p className='font-semibold text-3xl mb-4'>Popular APIs For Building An SEO Software</p>
                    <p className='mb-8'>Finding the right APIs to integrate into your SEO software can be a bit challenging, so here we are to help you out with our most popular API selections that you can use for building SEO software.</p>
                    <p className='font-semibold text-2xl mb-4'>1. DataForSEO Google Trends API</p>
                    <p className='mb-4'>DataForSEO Google trends help you know how often a keyword is searched on Google within a specific time. While using this tool, we can carry forward a search based on global trends, or if you want to go very specific with a location, you can do that too.</p>
                    <p className='mb-4'>All the responses are returned in the JSON format by default, but this Google trends API also supports responses in the XML and HTML formats. The API sends requests to google servers, and the requested parameters are sent back as an answer. The most common requested parameters are region, time interest, trending searches, related topics, top charts, and keyword suggestions.</p>
                    <p className='mb-8'>With the help of DataForSEO Google trends API, you would be able to save a lot of time for your SEO software users, as without Google trends, it will take a lot of time to do the research.</p>
                    <p className='font-semibold text-2xl mb-4'>2. DeepCrawl API</p>
                    <p className='mb-4'>DeepCrawl is the second API from the list that helps carry forward entire website crawls, collect the data, and send it to the client. Not just that, we can also get a lot of technical SEO data for the website.</p>
                    <p className='mb-8'>There are several such capabilities of DeepCrawl API. You would not integrate this API by using any 3rd-party provider to help you fetch data without writing code. You would have to connect your scripts to integrate with this API.</p>
                    <p className='text-2xl font-semibold mb-4'>3. Google Search Console API</p>
                    <p className='mb-4'>FGoogle Search Console API collects click and impression data, query rankings, search volumes and more. Integrating this API with your website or SEO software is available via almost any method. Not just that, you can quickly develop custom script routes for this API.</p>
                    <p className='mb-8'>One of the most significant advantages of integrating this API is you get Search console data availability for the last 16 months.</p>
                    <p className='text-2xl font-semibold mb-4'>4. SEMrush API</p>
                    <p className='mb-8'>SEMrush API offers several uses: keyword data and search volume collection, domain overview, organic search keyword data, and more. Users can easily access the data using any easy to complex method. Hence they would be able to collect the data in a CSV file.</p>
                    <p className='text-2xl font-semibold mb-4'>5. Majestic SEO API</p>
                    <p className='mb-4'>If you want to integrate backlink data collection features into your SEO software, then Majestic SEO API is the best option for you. With the help of this API, you can get a list of backlinks for a domain or a specific page too.</p>
                    <p className='mb-8'>You can integrate this API with your SEO software without any precise authentication, which means you can directly pass a URL request for the integration. This is not a free API; you would have to pick up a plan based on your requirements.</p>
                    <p className='text-2xl font-semibold mb-4'>6. Ahrefs API</p>
                    <p className='mb-4'>Here's another option for collecting backlinks data which is Ahrefs API. They have recently introduced their API to the users, and it is filled with several latest integrations to help you out.</p>
                    <p className='mb-8'>You can integrate it quickly, and it will return the requested data in JSON format.This was all about some of the most popular APIS for building SEO software.</p>
                    <p className='text-3xl font-semibold mb-4'>Summary</p>
                    <p className='mb-4'>Still, thinking that you can't get ahead of your competitors with your SEO software? You shouldn't. With the help of these most popular APIs integrated into your SEO software, you can make the life of your customers easy, and they're going to fall in love with your software.</p>
                </div>
                <ServiceContact></ServiceContact>
                <ServiceFooter></ServiceFooter>
            </div>
        </div>
    );
};

export default PopularApiBlog;