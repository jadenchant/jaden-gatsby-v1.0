import React from "react";
import Head from "../components/Head";
import Header from "../components/Header";
import Social from "../components/Social";
import "../css/about.css";

const About = () => {
  return (
    <main className='about'>
      <Head title='About Me' description='about me' kewords='about' />
      <Header />
      <section className='content'>
        <Social />
      </section>
    </main>
  );
};

export default About;
