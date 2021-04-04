import React from "react";
import Head from "../components/Head";
import Header from "../components/Header";
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
    </main>
  );
};

export default Portfolio;
