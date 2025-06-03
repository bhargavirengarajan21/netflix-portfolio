import React, {useEffect, useState} from 'react';
import NetflixIntro from '../components/NetflixIntro';
import { DataProvider } from '../Context';
import { useData } from '../Context';
import Layout from '../components/Layout';

const Home = () => {
    const {data, setData} = useData();
    const redirectURL = data.isLoggedIn ? '/browse' : '/login';
    useEffect(() => {
       if (data.showedIntro) {
           window.location.href = redirectURL;
       }
   }, [])

    const ShowContent = () => {
        if(!data.showedIntro) {
            return <NetflixIntro />;
        } 
    }

    return (
        <div className="home-container">
            <Layout>
                {ShowContent()}
            </Layout>
        </div>
    );
};

export default Home;