import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className=' flex flex-col justify-center align-baseline min-h-screen text-center bg-slate-900'>
            <div>
            <h1 className=' mb-5 text-9xl text-blue-400'>404</h1>
            <h2 className=' mb-10 text-6xl text-white'>Page Not Found</h2>
            <Link to='/'><button className=' rounded btn px-16 text-center bg-blue-400 shadow-md shadow-sky-800'>Go To Home Page</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;