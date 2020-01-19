import React from "react";
import PropTypes from "prop-types";
import { BlogPostTemplate } from "../../templates/blog-post";

const BlogPostPreview = ({ entry, widgetFor }) => {
  return (
    <BlogPostTemplate
      content={widgetFor("body")}
      date={entry.getIn(["data", "date"])}
      title={entry.getIn(["data", "title"])}
      prev={{
        title: "Lorem ipsum dolor",
        slug: ""
      }}
      next={{
        title: "Lorem ipsum dolor",
        slug: ""
      }}
    />
  );
};

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default BlogPostPreview;
