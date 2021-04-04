import React from "react";
import Head from "../components/Head";
import Header from "../components/Header";
import "../css/about.css";

const About = () => {
  return (
    <main className='about'>
      <Head title='About Me' description='about me' kewords='about' />
      <Header />
    </main>
  );
};

export default About;
