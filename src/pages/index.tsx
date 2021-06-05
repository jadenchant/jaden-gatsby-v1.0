import React from "react";
import Head from "../components/Head";
import Header from "../components/Header";
import Social from "../components/Social";
import "../css/index.css";

const IndexPage = () => {
  return (
    <main className='index'>
      <Head title='Home' description='homepage' kewords='home' />
      <Header />
      <section className='content'>
        <h1 className='title'>Home</h1>
        <div className='intro'>
          <p>
            Hello, I'm Jaden Chant. I am an aspiring Web Developer. I love to
            learn new skills and develop beautiful websites.
          </p>
        </div>
        <div className='container pages'></div>
        <Social />
      </section>
    </main>
  );
};

export default IndexPage;
