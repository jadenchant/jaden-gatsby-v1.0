module.exports = {
  siteMetadata: {
    title: "jaden-v1.0",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Jaden Chant",
        short_name: "Jaden Chant",
        start_url: "/",
        icon: "src/images/icon.png",
      },
    },
  ],
};
