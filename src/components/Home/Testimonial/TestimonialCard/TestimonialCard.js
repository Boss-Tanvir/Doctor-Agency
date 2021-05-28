import React from 'react';
import './TestimonialCard.css';
const TestimonialCard = ({info}) => {
    return (
        <div className="col-md-4 mt-3 card shadow testimonial">
        <div className="card-body">
            <p  className="card-text text-center">{info.clientReview}</p>
        </div>
        <div className="card-footer d-flex  align-items-center">
            <img className="mx-3" src={info.clientImg} alt="" width="60"/>
            <div className="testimonial_client_details">
                <h6 className="mb-0" style={{color: 'rgb(28, 199, 193)'}}>{info.clientName}</h6>
                <p style={{fontSize:'12px'}}>{info.clientLlocation}</p>
            </div>
        </div>
        </div>
    );
};

export default TestimonialCard;