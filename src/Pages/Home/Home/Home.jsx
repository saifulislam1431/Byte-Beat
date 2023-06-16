import React from 'react';
import Banner from '../Banner/Banner';
import NewsFeed from '../NewsFeed/NewsFeed';
import Update from '../Update/Upcoming';
import Jobs from '../Jobs/Jobs';
import Upcoming from '../Update/Upcoming';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {
    return (
        <div>
            <Banner />
            <NewsFeed />
            <Jobs />
            <Upcoming />
            <Newsletter />
           
            
        </div>
    );
};

export default Home;