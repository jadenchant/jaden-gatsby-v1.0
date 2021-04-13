import React, { useState, useEffect } from "react";
import firebase from "gatsby-plugin-firebase";
import Head from "../components/Head";
import Header from "../components/Header";
import Social from "../components/Social";
import "../css/portfolio.css";

const Portfolio = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    firebase
      .database()
      .ref("/data/pages/")
      .once("value")
      .then(snapshot => {
        setData(snapshot.val());
      });
  }, []);

  return (
    <main className='portfolio'>
      <Head
        title='Portfolio'
        description='portfolio projects'
        kewords='portfolio projects'
      />
      <Header />
      <section className='content'>
        {/* Use SQL and a database to fetch for projects */}
        {data}
        <Social />
      </section>
    </main>
  );
};

export default Portfolio;
