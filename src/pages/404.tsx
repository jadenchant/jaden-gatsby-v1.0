import React from "react";
import Header from "../components/Header";
import "../css/pagenotfound.css";

const NotFoundPage = () => {
  return (
    <main className='not-found-page'>
      <Header />
      <div className='content'>
        <h2>Error: 404 Page Not Found</h2>
      </div>
    </main>
  );
};

export default NotFoundPage;
