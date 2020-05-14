import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const nav = [
  {
    to: "/zoom/ecamm",
    label: "Ecamm",
  },
  {
    to: "/zoom/onestream",
    label: "One Stream",
  },
  {
    to: "/zoom/youtubeLiveWithSlido",
    label: "Youtube live with Slido",
  },
  {
    to: "/zoom/youtubeSlido",
    label: "Youtube with Slido",
  },

  {
    to: "/zoom/flipVideo",
    label: "FlipVideo",
  },
];

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, textAlign: "center" }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div className="navigation">
      {nav.map((item) => {
        return !item.relaod ? (
          <Link
            to={item.to}
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {item.label}
          </Link>
        ) : (
          <a
            href={item.to}
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {item.label}
          </a>
        );
      })}
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
