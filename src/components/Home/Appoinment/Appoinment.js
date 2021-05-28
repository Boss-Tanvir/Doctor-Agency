import React from 'react';
import appoinment from '../../../images/appoinment.png';
import './Appoinment.css';
const Appoinment = () => {
    return (
        <section className="container offset-md-1">
            <div className="appoinment">
            <div className="row">
                <div className="col-md-4">
                    <img src={appoinment} className="img-fluid" alt="" />
                </div>
                <div className="col-md-8 appoinment_details_col">
                <div className="appoinment_details mt-5">
                <small>Appoinment</small>
                    <h4 className="mt-3">Make an appoinment <br></br> Today</h4>
                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quod temporibus voluptas vitae aspernatur incidunt molestiae laudantium numquam facilis tempora.</p>
                    <button className="btn btn-primary">
                        Leaarn More
                    </button>
                </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Appoinment;