import React from 'react';
import featured from '../../../images/featured.png';
import './FeaturedService.css';
const FeaturedService = () => {
    return (
        <section className="container mt-5 featured">
            <div className="row all_featured">
            <div className="col-md-4 featured_img">
                <img src={featured} className="img-fluid featured_main_img" alt="" />
            </div>
            <div className="col-md-7 features_details_col">
            <div className="features_details">
            <h1 style={{color: 'rgba(58,66,86,255)'}}>Exceptional Dental Care <br/> On Your Team</h1>
                <p className="mt-4 text-muted" style={{fontSize: '18px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi totam asperiores, quos id nobis officia se. Sapiente, beatae enim sunt facere alias id culpa asperiores vel. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, debitis aperiam eum error optio obcaecati deserunt iure illum modi, necessitatibus nihil eos incidunt, quia illo! Quibusdam obcaecati tenetur voluptatibus sunt illo nihil qui, aliquam sapiente voluptatem magni excepturi, veniam error atque, amet doloremque magnam aut. Quaerat voluptas suscipit iusto officia. </p>
                <p></p>
                <div className="button btn btn-primary mt-4">Learn More</div>
            </div>
            </div>
            </div>
        </section>
    );
};

export default FeaturedService;