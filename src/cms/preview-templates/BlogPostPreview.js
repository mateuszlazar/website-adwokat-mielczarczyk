import React from "react";
import PropTypes from "prop-types";
import { BlogPostTemplate } from "../../templates/blog-post";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const BlogPostPreview = ({ entry, widgetFor }) => {
  return (
    <>
      <Navbar />
      <BlogPostTemplate
        content={widgetFor("body")}
        date={entry.getIn(["data", "date"])}
        title={entry.getIn(["data", "title"])}
        prev={{
          frontmatter: { title: "Lorem ipsum dolor" },
          fields: { slug: "" }
        }}
        next={{
          frontmatter: { title: "Lorem ipsum dolor" },
          fields: { slug: "" }
        }}
      />
      <Footer />
    </>
  );
};

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default BlogPostPreview;
