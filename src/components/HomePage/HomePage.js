import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects/Projects';

const HomePage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://my-protfolio-server.vercel.app/data`)
    .then(res => res.json())
    .then(data => {
      setData(data)
    })
},[])
    return (
        <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Projects data={data}></Projects>
      <Contact></Contact>
      <Footer></Footer>
        </div>
    );
};

export default HomePage;