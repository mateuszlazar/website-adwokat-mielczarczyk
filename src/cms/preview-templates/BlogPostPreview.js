import React from "react";
import PropTypes from "prop-types";
import { BlogPostTemplate } from "../../templates/blog-post";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const BlogPostPreview = ({ entry, widgetFor }) => (
  <>
    <Navbar />
    <BlogPostTemplate
      content={widgetFor("body")}
      date={"01.01.2000"}
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
