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
        credentials: {
          apiKey: "<YOUR_FIREBASE_API_KEY>",
          authDomain: "<YOUR_FIREBASE_AUTH_DOMAIN>",
          databaseURL: "<YOUR_FIREBASE_DATABASE_URL>",
          projectId: "<YOUR_FIREBASE_PROJECT_ID>",
          storageBucket: "<YOUR_FIREBASE_STORAGE_BUCKET>",
          messagingSenderId: "<YOUR_FIREBASE_MESSAGING_SENDER_ID>",
          appId: "<YOUR_FIREBASE_APP_ID>",
        },
      },
    },
  ],
};
