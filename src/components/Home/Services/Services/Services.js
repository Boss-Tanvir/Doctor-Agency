import React from 'react';
import cavity from '../../../../images/cavity.png';
import fluride from '../../../../images/floride.png';
import whitening from '../../../../images/whitening.png';
import ServiceInfo from '../ServiceInfo/ServiceInfo';
import './Services.css';
const Servieces = () => {
    let serviceData = [
        {
            title : 'Fluoride Treatment',
            description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, quos explicabo. Aspernatur aperiam molestiae repellat?',
            img : fluride
        },
        {
            title : 'Cavity Filling',
            description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem et soluta officiis autem ad dignissimos!',
            img : cavity
        },
        {
            title : 'Teach Whitening',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque numquam autem repellat nemo magni nesciunt.',
            img : whitening
        }
    ]
    return (
            <section className="services mt-5">
                <div className="services_details">
                <h6 style={{color:'#1cc7c1'}}>OUR SERVICES</h6>
                <h2 style={{color: 'rgba(58,66,86,255)'}}>Service We Provide</h2>
                </div>
                <div className="container mt-5">
                <div className="row">
                    {
                       serviceData.map(Sdata => <ServiceInfo Sdata={Sdata}/>)
                        
                    }
                    </div>
                </div>
            </section>
    );
};

export default Servieces;