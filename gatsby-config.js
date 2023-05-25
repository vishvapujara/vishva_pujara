/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Vishva Pujara`,
    description: `Thats's all about me!`,
    author: `Vishva Pujara`,
    url: 'https://www.vishvapujara.com/',
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}