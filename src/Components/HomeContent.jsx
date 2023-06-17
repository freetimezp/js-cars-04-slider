import React from 'react';
import HomeAside from './HomeAside';
import HomeSlider from './HomeSlider';

const HomeContent = () => {
    return (
        <div className='home-content'>
            <HomeAside />
            <HomeSlider />
        </div>
    );
};

export default HomeContent;
