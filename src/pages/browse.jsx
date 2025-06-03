import React from 'react';
import HeroSection from '../components/Hero';
import Layout from '../components/Layout';
import Project from '../components/Project';
import SkillsSection from '../components/SkillComponent';
import HireMeSection from '../components/HireMe';

const DashBoard = () => {
    return (
        <Layout>
            <div className="dashboard-container">
            <HeroSection />
            </div>
        </Layout>
    );
}

export default DashBoard;