import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Grid from '@mui/material/Grid'
import {AppBar} from "@mui/material";
import {
    container,
    heading,
    navLinkItem,
    navLinkText,
    navLinks,
    siteTitle,
    logo,
    logowrapper,
    banner
} from './layout.module.css'


const Layout = ({pageTitle, children}) => {

    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

   const { title } = data.site.siteMetadata

    return (
        // <div className={container}>
        //     <title>{{pageTitle} | {title}}</title>
        //     <header className={siteTitle}>{title}</header>
        //     <nav>
        //         <ul className={navLinks}>
        //             <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
        //             <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
        //             <li className={navLinkItem}><Link to="/blogs" className={navLinkText}>Blog</Link></li>
        //         </ul>
        //     </nav>
        //     <main>
        //         <h1 className={heading}>{pageTitle}</h1>
        //         {children}
        //     </main>
        // </div>

        <Grid container xs={12} alignItems="center">
            <Grid item xs={10}>
                <AppBar style={{backgroundColor: 'white '}} elevation={0}>
                    <Grid container>
                      <Grid item xs={6}>
                          <StaticImage
                              src={`../images/Techify_Horiz_Color_RGB.png`}
                              alt={"Techify Branding"}
                              className={logowrapper}
                              imgClassName={logo}
                          />
                      </Grid>
                    </Grid>

                </AppBar>
            </Grid>

            <Grid item xs={10}>
                <StaticImage
                    src={`../images/Banner.png`}
                    alt={"This will be a hero image"}
                    className={banner}
                />
                <h1>Test to set up new env on mac m1</h1>
            </Grid>

                 {/*<nav>*/}
                 {/*    <ul className={navLinks}>*/}
                 {/*        <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>*/}
                 {/*        <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>*/}
                 {/*        <li className={navLinkItem}><Link to="/blogs" className={navLinkText}>Blog</Link></li>*/}
                 {/*    </ul>*/}
                 {/*</nav>*/}
            {/*<Grid item xs={10}>*/}
            {/*    <main>*/}
            {/*        <h1 className={heading}>{pageTitle}</h1>*/}
            {/*        {children}*/}
            {/*    </main>*/}
            {/*</Grid>*/}

        </Grid>
    )
}


export default Layout;
