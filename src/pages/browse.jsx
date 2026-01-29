import React from 'react';
import HeroSection from '../components/Hero';
import Layout from '../components/Layout';
import Project from '../components/Project';
import HireMeSection from '../components/HireMe';

const DashBoard = () => {
    return (
        <Layout>
            <div className="dashboard-container">
            <HeroSection />
            <Project />
            <HireMeSection />
            </div>
        </Layout>
    );
}

export default DashBoard;