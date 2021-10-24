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
      <section className='content bg-gray-300'>
        <h1 className='text-3xl px-8 py-10 font-bold uppercase'>Home</h1>
        <div className='text-2xl px-8 py-0 text-center'>
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
