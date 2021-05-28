import React from 'react';
import Appoinment from '../Appoinment/Appoinment';
import Blog from '../Blog/Blog/Blog';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header/Header';
import OurDoctor from '../OurDoctors/OurDoctor';
import Servieces from '../Services/Services/Services';
import Testimonial from '../Testimonial/Testimonial/Testimonial';



const Home = () => {
    return (
        <div>
           <Header/>
           <Servieces/>
           <FeaturedService/>
           <Appoinment/>
           <Testimonial/>
           <Blog/>
           <OurDoctor/>
        </div>
    );
};

export default Home;