import React from 'react';
import Banner from '../Banner/Banner';
import NewsFeed from '../NewsFeed/NewsFeed';
import Update from '../Update/Update';
import Jobs from '../Jobs/Jobs';

const Home = () => {
    return (
        <div>
            <Banner />
            <NewsFeed />
            <Update />
            <Jobs />
        </div>
    );
};

export default Home;