import React from 'react';
import gri from '../../../../images/Gri Tonyk.png';
import henry from '../../../../images/Henry Miller.png';
import william from '../../../../images/Wiiliam Peter.png';
import BlogCard from '../BlogCard/BlogCard';
const Blog = () => {
    const blogData = [
        {
            title : 'Check at least a doctor in a year for your teeth',
            description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author:'Dr. Cudi',
            authorImg : gri,
            date : '23 April 2019'
        },
        {
            title : 'Two time brush in a day can keep you healthy',
            description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author:'Dr. Sinthia',
            authorImg : henry,
            date : '23 April 2019'
        },
        {
            title : 'The tooth cancer is taking a challenge',
            description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author:'Dr. Cudi',
            authorImg : william,
            date : '23 April 2019'
        },
    ]
    return (
        <section className="container blog mt-5 pt-5">
        <div className="blog_top_details text-center">
            <small className="mb-3" style={{color: 'rgb(28, 199, 193)', fontWeight:'bold'}}>OUR BLOG</small>
            <h2 className="my-3" style={{color: '#3a4256'}}>From Our Blog News</h2>
        </div>
            <div className="row card-deck justify-content-center">
                {
                    blogData.map(info => <BlogCard info={info}/>)
                }
            </div>
        
    </section>
    );
};

export default Blog;