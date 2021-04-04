import React from "react";
import Helmet from "react-helmet";

const Head = props => {
  const description = "Jaden Chant " + props.description;
  const kewords =
    "Jaden Chant Web-developer About Portfolio Contact " + props.keywords;

  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={kewords} />
      <meta name='author' content='Jaden Chant' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0'
      ></meta>
    </Helmet>
  );
};

export default Head;
