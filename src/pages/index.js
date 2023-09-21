import React from "react";
import Link from "gatsby-link";
import "./index.css";
// Basic boilerplate code for content to display
export default () => (
    <div>
        <h1>Hi! I'm building a fake Gatsby site as part of my learning!</h1>
        <p>
            What do I like to do? Lots of coding but definitely enjoy building
            websites.
        </p>
        <Link to="/blog">Go to blog</Link>
        <footer className="footer"> © 2021 Copyright:Bulli Swami Reddy Goluguri</footer>
    </div>
);
