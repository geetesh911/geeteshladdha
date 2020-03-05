import React from "react";

export const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li>
          <a href="https://github.com/geetesh911">
            <span data-hover="Github" className="footer-icon-large">
              Github
            </span>
            <span className="footer-icon-small">
              <i className="fab fa-github" />
            </span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/geetesh-laddha-36ab80146/">
            <span data-hover="LinkedIn" className="footer-icon-large">
              LinkedIn
            </span>
            <span className="footer-icon-small">
              <i className="fab fa-linkedin" />
            </span>
          </a>
        </li>
        <li>
          <a href="https://www.hackerrank.com/geetesh911">
            <span data-hover="HackerRank" className="footer-icon-large">
              HackerRank
            </span>
            <span className="footer-icon-small">
              <i className="fab fa-hackerrank" />
            </span>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/geetesh_911">
            <span data-hover="Twitter" className="footer-icon-large">
              Twitter
            </span>
            <span className="footer-icon-small">
              <i className="fab fa-twitter" />
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};
