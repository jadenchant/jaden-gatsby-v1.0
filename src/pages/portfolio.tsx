import React from "react";
import Head from "../components/Head";
import Header from "../components/Header";
import Social from "../components/Social";
import "../css/portfolio.css";

const Portfolio = () => {
  return (
    <main className='portfolio'>
      <Head
        title='Portfolio'
        description='portfolio projects'
        kewords='portfolio projects'
      />
      <Header />
      <section className='content'>
        <Social />
      </section>
    </main>
  );
};

export default Portfolio;
