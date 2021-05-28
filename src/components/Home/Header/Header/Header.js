import React from 'react';
import HeaderMainContent from '../HeaderMainContent/HeaderMainContent';
import '../../../../images/chairBg.png'
import Navbar from '../Navbar/Navbar';
import './Header.css'
import BussinessInfo from '../BussinessInfo/BussinessInfo';
const Header = () => {
    return (
        <div className="header_container">
            <Navbar/>
            <HeaderMainContent/>
            <BussinessInfo/>
        </div>
    );
};

export default Header;