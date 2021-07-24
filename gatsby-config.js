/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require(`path`)

 module.exports = {
   plugins: [
     `gatsby-plugin-emotion`,
     `gatsby-plugin-mdx`,
     `gatsby-plugin-react-helmet`,
     `gatsby-plugin-sass`,
     `gatsby-plugin-sharp`,
     `gatsby-transformer-sharp`,
     {
       resolve: `gatsby-source-filesystem`,
       options: {
         name: `images`,
         path: path.join(__dirname, `src`, `images`),
       },
       resolve: `gatsby-plugin-google-gtag`,
       options: {
         // You can add multiple tracking ids and a pageview event will be fired for all of them.
         trackingIds: [
           "G-8MV4EPB9KJ", // Google Analytics / GA
         ],
       },
       // options: {
       //   path: `${__dirname}/gatsby-config.js`,
       // },
     }
   ],
 }
