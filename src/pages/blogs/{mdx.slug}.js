import * as React from 'react';
import {graphql} from "gatsby";
import Layout from '../../components/layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {MDXRenderer, mdx} from "gatsby-plugin-mdx";


const BlogPost = ({data}) => {
    const image = getImage(data.mdx.frontmatter.hero_image);

    return (
        <Layout pageTitle="Super Cool Blog Posts!">
            <p>{data.mdx.frontmatter.date}</p>
            <GatsbyImage
                alt={data.mdx.frontmatter.hero_image_alt}
                image={image}
            />
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
        </Layout>

    )
}

export const query = graphql`
    query($slug: String) {
       mdx(slug: {eq: $slug}) {
          body
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            hero_image_alt
            hero_image_credit_link
            hero_image_credit_text
            hero_image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
      }
  }
`
export default BlogPost;
