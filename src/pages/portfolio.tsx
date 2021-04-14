import React, { useState, useEffect } from "react";
import firebase from "gatsby-plugin-firebase";
import Head from "../components/Head";
import Header from "../components/Header";
import Social from "../components/Social";
import "../css/portfolio.css";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!portfolio) {
      firebase
        .database()
        .ref("pages/portfolio")
        .once("value")
        .then(snapshot => {
          setPortfolio(snapshot.val());
        })
        .catch(e => setError("Data Not Found: " + e));
    }
  }, []);

  const headComponent = (
    <Head
      title='Portfolio'
      description='portfolio projects'
      kewords='portfolio projects'
    />
  );

  let portfolioDisplay;
  if (!portfolio) {
    portfolioDisplay = (
      <div className='noInfo'>
        <div>No Info</div>
      </div>
    );
  } else {
    portfolioDisplay = (
      <div className='info'>
        <div>{portfolio.data[0].name}</div>
      </div>
    );
  }

  return (
    <main className='portfolio'>
      {headComponent}
      <Header />
      <section className='content'>
        {portfolioDisplay}
        <Social />
      </section>
    </main>
  );
};

export default Portfolio;
