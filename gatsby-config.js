module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "42KL Website",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "@plasmicapp/loader-gatsby",
      options: {
        projects: [
          {
            id: "iDYWVAdeSFtCkvXmft93ay", // ID of a project you are using
            token:
              "so49mbY6KeOCiQvi2ua9NUwU8d3UFcCTrsWjQRxsPBOyobVCJTdi4MZLBVU4SaXAhpxDTbOD7u1mTJm88wFbQ", // API token for that project
          },
        ],
        // Fetches the latest revisions, whether or not they were unpublished!
        // Disable for production to ensure you render only published changes.
        preview: true,
      },
    },
  ],
};
