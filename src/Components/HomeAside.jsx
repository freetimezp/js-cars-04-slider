import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt, faHandPointDown } from '@fortawesome/free-solid-svg-icons';
import { AiOutlineTwitter, AiOutlineYoutube, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from 'react-icons/fa';

const HomeAside = () => {
    return (
        <div className='home-aside'>
            <div className="home-aside__decoration">
                <FontAwesomeIcon icon={faHandPointDown} />
            </div>

            <div className="home-aside__social">
                <div className="home-aside__social-item">
                    <a href="/" className="home-aside__social-link">
                        <AiOutlineInstagram />
                    </a>
                </div>
                <div className="home-aside__social-item">
                    <a href="/" className="home-aside__social-link">
                        <AiOutlineTwitter />
                    </a>
                </div>
                <div className="home-aside__social-item">
                    <a href="/" className="home-aside__social-link">
                        <AiOutlineYoutube />
                    </a>
                </div>
                <div className="home-aside__social-item">
                    <a href="/" className="home-aside__social-link">
                        <FaFacebookF />
                    </a>
                </div>
            </div>

            <div className="home-aside__share-icon">
                <FontAwesomeIcon icon={faShareAlt} />
            </div>
        </div>
    );
};

export default HomeAside;
