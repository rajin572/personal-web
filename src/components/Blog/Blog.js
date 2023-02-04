import React from 'react';
import Footer from '../Footer/Footer';
import LimitedNav from '../Navbar/LimitedNav';

const Blog = () => {
    return (
        <div>
        <LimitedNav></LimitedNav>
        <div className=' flex flex-col justify-center align-baseline min-h-screen text-center'>
            <h1 className=' mb-5 text-4xl text-black'>Blogs Will Comming Soon</h1>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Blog;