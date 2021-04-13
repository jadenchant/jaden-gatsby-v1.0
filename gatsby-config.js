module.exports = {
  siteMetadata: {
    title: "Jaden Chant",
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
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: require("./.firebase/jaden-chant-v1-firebase-key.json"),
        databaseURL: "https://jaden-chant-v1-default-rtdb.firebaseio.com/",
      },
    },
  ],
};
