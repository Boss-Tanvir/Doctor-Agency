import React from 'react';
import './BlogCard.css';
const BlogCard = ({info}) => {
    return (
        <div className="col-md-4 card shadow-sm blog_card">
            <div className="card-header d-flex  align-items-center">
                <img className="mx-3" src={info.authorImg} alt="" width="60"/>
                <div>
                    <h6 className="text-dark">{info.author}</h6>
                    <p className="m-0">{info.date}</p>
                </div>
            </div>
            <div className="card-body">
                <h5>{info.title}</h5>
                <p className="card-text text-secondary mt-4">{info.description}</p>
            </div>
            
       </div>
    );
};

export default BlogCard;