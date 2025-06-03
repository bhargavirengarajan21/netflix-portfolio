import React, { useState, useEffect } from 'react';
import {useData} from '../Context';

const ThemeToggle = () => {
  const {data, setData} = useData();
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', data.theme);
  }, [data.theme]);

  const toggleTheme = () => {
    setData(prev => ({...prev, theme: data?.theme === 'light' ? 'dark' : 'light'}));
  };

  return (
    <label className="theme-switch">
      <span>Light</span>
      <input type="checkbox" onChange={toggleTheme} checked={data.theme === 'dark'} />
      <span className="slider"></span> 
      <span>Dark</span>
    </label>
  );
};

export default ThemeToggle;
