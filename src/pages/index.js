import * as React from "react";
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";




const IndexPage = () => {
    return (

        <Layout pageTitle={"Home Page"}>
            <StaticImage src={'../images/iphone.jpg'} alt="A couple of iPhones"/>
            <p>Im building this by following the tutorial on Gatsby's website</p>
        </Layout>
    )
}

export default IndexPage
