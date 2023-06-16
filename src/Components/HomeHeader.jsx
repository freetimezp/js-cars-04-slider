import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const HomeHeader = () => {
    return (
        <header className="home-header">
            <div className="top-line">
                <a href="/" className="logo">
                    <span className="logo-img__wrapper">
                        <img src="/images/logo.svg" alt="logo" />
                    </span>
                    <span className="logo__text">ELIXCOR</span>
                </a>
                <div className="top-line__decoration"></div>
                <div className="top-line__contacts">
                    <span className="top-line__phone">
                        Phone: <span className="top-line__numbers">333-444-555</span>
                    </span>
                    <span className="top-line__seperator"></span>
                    <span className="top-line__address">
                        Address: <span className="top-line__text">Ukraine</span>
                    </span>
                </div>
                <div className="top-line__decoration"></div>
                <div className="menu-button__container">
                    <a href="/" className="menu-button">
                        <FontAwesomeIcon icon={faBars} />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default HomeHeader;
