import React from "react";
import Head from "../components/Head";
import Header from "../components/Header";
import Social from "../components/Social";
import "../css/pagenotfound.css";

const NotFoundPage = () => {
  return (
    <main className='not-found-page'>
      <Head
        title='404 Page Not Found'
        description='page not found'
        kewords='404'
      />
      <Header />
      <div className='content'>
        <h2>Error: 404 Page Not Found</h2>
        <Social />
      </div>
    </main>
  );
};

export default NotFoundPage;
