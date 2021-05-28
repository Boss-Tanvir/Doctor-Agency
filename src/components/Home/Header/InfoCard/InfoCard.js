import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './InfoCard.css';
const InfoCard = ({info}) => {
    return (
        <div className="col-md-4 mt-3 info-card">
        <div className={`info-container info-${info.background}`}>
        <div className="info_icon">
            <FontAwesomeIcon className="info-icon" icon={info.icon} />
            </div>
        <div className="info_details mt-3">
            <h6>{info.title}</h6> 
            <p>{info.description}</p>
        </div>
        </div>
        </div>
    );
};

export default InfoCard;