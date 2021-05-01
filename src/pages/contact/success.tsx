import React from "react";
import Head from "../../components/Head";
import Header from "../../components/Header";
import Social from "../../components/Social";
import "../../css/pagenotfound.css";

const Success = ({ location }) => {
  return (
    <main className='not-found-page'>
      <Head
        title='404 Page Not Found'
        description='page not found'
        kewords='404'
      />
      <Header />
      <section className='content'>
        <h2>Error: In Development</h2>
        <Social />
      </section>
    </main>
  );
};

export default Success;
