/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import LoginLogout from "../components/loginLogout";

import Header from "./header";
import "./layout.css";

const Layout = ({ children, hideLogin }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
      </>

      <div className="layout">
        <main>
          {!hideLogin && <LoginLogout />}
          {children}
        </main>
      </div>
      <footer></footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
