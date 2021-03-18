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
        background_color: "#dfe0e2",
        theme_color: "#3e90cc",
        display: "standalone",
        icon: "./static/icon-v2.png",
      },
    },
  ],
};
