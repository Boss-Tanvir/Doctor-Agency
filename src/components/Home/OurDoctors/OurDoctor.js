import React from 'react';
import doctor from '../../../images/doctor.png';
const OurDoctor = () => {
    let doctorCard = 
    [
        {
            name : 'Dr Caudi',
            img : doctor,
            icon : ''
        }
    ]
    return (
        <section className="container mt-5">
            <h5 className="text-center" style={{color: 'rgb(28, 199, 193)'}}>Our Doctors</h5>
            <div className="row">
                <div className="col-md-4">

                </div>
            </div>
        </section>
    );
};

export default OurDoctor;