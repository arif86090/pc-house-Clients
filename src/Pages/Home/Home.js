import React from 'react';
import Banner from './Banner/Banner';

import Makeappo from './Makeappo/Makeappo';
import ServicesDls from './ServiceDtls/ServicesDls';

import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <ServicesDls></ServicesDls>
            
            <Makeappo></Makeappo>
            <Testimonials></Testimonials>
           
        </div>
    );
};

export default Home;