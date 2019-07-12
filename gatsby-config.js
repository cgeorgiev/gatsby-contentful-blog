module.exports = {
  siteMetadata: {
    title: `6 AM`,
    description: `Web design and development.`,
    author: `6 AM`,
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Services",
        link: "/services/",
      },
      {
        name: "Portfolio",
        link: "/portfolio/",
      },
      {
        name: "Projects",
        link: "/projects/",
      },
      {
        name: "About Us",
        link: "/about/",
      },
      {
        name: "Blog",
        link: "/blog/",
      },
      {
        name: "Contact",
        link: "/contact/",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `xd8z8keid4x6`,
        accessToken: `DZNdIyr821RTbIdaXNxFZX6vF7vRNJajb0Fg5ExMDi0`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Open Sans\:300,300i,400,400i,600,600i,700,700i`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
