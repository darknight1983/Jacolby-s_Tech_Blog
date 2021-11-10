module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "Jacolby's Tech Blog",
    },
    plugins: [
        "gatsby-plugin-gatsby-cloud",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `blog`,
                path: `${__dirname}/blog/`,
            },
            // __key: "images",
        },
        "gatsby-plugin-mdx",
        "gatsby-transformer-sharp",
        "gatsby-plugin-material-ui"
    ],
};
