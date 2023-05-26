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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vishva Pujara`,
        short_name: `Portfolio Website`,
        description: `It's all about Vishva Pujara.`,
        lang: `en`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        start_url: `/`,
        theme_color_in_head: false,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/about/`, `/contact/`],
      },
    },
  ],
}