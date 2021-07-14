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
       // options: {
       //   path: `${__dirname}/gatsby-config.js`,
       // },
     }
   ],
 }
