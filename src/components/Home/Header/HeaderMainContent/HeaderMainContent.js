import React from 'react';
import chair from '../../../../images/chair.png'
const HeaderMainContent = () => {
    return (
            <main style={{height:'600px'}} className="row d-flex align-items-center"> 
                <div className="col-md-4 offset-md-1">
                    <h1>Your New Smile <br/> Start Here</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sunt vero vel eligendi dicta odio.</p>
                    <button className="btn btn-primary">Get Appointment</button>
                </div>
                <div className="col-md-6">
                    <img src={chair} alt="" className="img-fluid" />
                </div>
            </main>
    );
};

export default HeaderMainContent;