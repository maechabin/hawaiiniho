require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-127426346-1',
      },
    },
    {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
        features: [`fetch`],
      },
    },
    {
      resolve: 'gatsby-theme-firebase',
      options: {
        credentials: {
          apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
          authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
          projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
          storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.REACT_APP_FIREBASE_APP_ID,
          measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
        },
      },
    },
    {
      resolve: "gatsby-theme-firebase",
      options: {
        credentials: {
          apiKey: '',
          authDomain: '',
          databaseURL: '',
          projectId: '',
          storageBucket: '',
          messagingSenderId: '',
          appId: '',
        },
      },
    },
  ],
};
