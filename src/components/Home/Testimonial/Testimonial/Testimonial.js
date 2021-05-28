import React from 'react';
import gri from '../../../../images/Gri Tonyk.png';
import henry from '../../../../images/Henry Miller.png';
import william from '../../../../images/Wiiliam Peter.png';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import './Testimonial.css';

const Testimonial = () => {

    let testimonialData = [
        {
            clientName : 'Winson Herry',
            clientLlocation : 'Califonia',
            clientReview : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias dolores at molestiae totam necessitatibus modi saepe. Voluptates unde quod saepe quo impedit ab molestiae, doloremque reprehenderit qui quisquam repudiandae.',
            clientImg : william

        },
        {
        clientName : 'Winson Herry',
        clientLlocation : 'New Work',
        clientReview : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias dolores at molestiae totam necessitatibus modi saepe. Voluptates unde quod saepe quo impedit ab molestiae, doloremque reprehenderit qui quisquam repudiandae.',
        clientImg : gri
    },
    {
    clientName : 'Winson Herry',
    clientLlocation : 'Florida',
    clientReview : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias dolores at molestiae totam necessitatibus modi saepe. Voluptates unde quod saepe quo impedit ab molestiae, doloremque reprehenderit qui quisquam repudiandae.',
    clientImg : henry
}
    ]
    
    return (
        <section className="container testimonial mt-5">
            <div className="testimonial_top_details">
                <small className="mb-3" style={{color: 'rgb(28, 199, 193)', fontWeight:'bold'}}>Testimonial</small>
                <h2 className="my-3" style={{color: '#3a4256'}}>What's Our Patient <br></br> Say's</h2>
                <div className="row card-deck justify-content-center">
                    {
                        testimonialData.map(info => <TestimonialCard info={info}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;