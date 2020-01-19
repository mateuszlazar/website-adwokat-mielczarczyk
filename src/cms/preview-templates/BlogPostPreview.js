import React from "react";
import PropTypes from "prop-types";
import { BlogPostTemplate } from "../../templates/blog-post";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";

const BlogPostPreview = ({ entry, widgetFor }) => (
  <>
    <Navbar />
    <Hero />
    <BlogPostTemplate
      content={widgetFor("body")}
      date={"(data publikacji)"}
      title={entry.getIn(["data", "title"])}
      prev={null}
      next={null}
    />
    <Footer />
  </>
);

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default BlogPostPreview;
