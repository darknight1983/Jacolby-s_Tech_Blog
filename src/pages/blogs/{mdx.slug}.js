import * as React from 'react';
import Layout from '../../components/layout';


const BlogPost = (props) => {
    console.log(props)
    return (
        <Layout pageTitle="Super Cool Blog Posts!">
            <h1>Each blog post will be rendered dynamically.</h1>
        </Layout>

    )
}

export default BlogPost;
