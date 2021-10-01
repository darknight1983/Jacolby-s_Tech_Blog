import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'


const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
            </u1>
        </Layout>
    )
}


export const query = graphql`
    query {
        allFiles {
            nodes {
                name
            }
        }
    }
`

export default BlogPage;
