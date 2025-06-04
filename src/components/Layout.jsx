import React, { useContext, useEffect, useState } from 'react';
import Header from './Header';
import { useData } from '../Context';
import Footer from './Footer';

const Layout = ({children}) => {
    const {data, setData} = useData();

    useEffect(async() => {
        const setSessionData = async() => {
            await fetch(`${import.meta.env.VITE_API_URL}/get-session`, {credentials: "include"}).then(res => res.ok ? res.json() : null).then(data => {
                data.user = JSON.parse(data.user);
                if (data && data.user) {
                    console.log("User data fetched:", data.user);
                    setData((prevData) =>({ ...prevData, ...data.user, isLoggedIn: true }));
                }
                
            });
        }

        setSessionData();
    }, [])

    return (
        <>
            <div className="layout">
                <Header name={data?.sessionData?.userName} setDataContent={setData} isLoggedIn={data.isLoggedIn}/> 
                <main className="main-content">
                    {children}
                </main>
                <Footer/>
            </div>
        </>
    );
}

export default Layout;