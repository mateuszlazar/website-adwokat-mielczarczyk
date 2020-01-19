import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import SpecializationList from "../components/SpecializationList";

export const SpecializationPageTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
  id = null
}) => {
  const PostContent = contentComponent || Content;

  return (
    <>
      <section className="section section--blog-post">
        {helmet || ""}
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h1 className="title is-size-4 has-text-weight-bold is-bold-light">
                {title}
              </h1>
              <PostContent content={content} />
            </div>
          </div>
        </div>
      </section>
      <section className={"section specialization-nav"}>
        <div className={"container content"}>
          <div className={"column is-10 is-offset-1"}>
            <SpecializationList omitId={id} />
          </div>
        </div>
      </section>
    </>
  );
};

SpecializationPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const SpecializationPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout pageTitle={post.frontmatter.title}>
      <SpecializationPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Specjalizacja">
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.excerpt}`} />
          </Helmet>
        }
        title={post.frontmatter.title}
        id={post.id}
      />
    </Layout>
  );
};

SpecializationPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default SpecializationPage;

export const pageQuery = graphql`
  query SpecializationPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      excerpt(pruneLength: 50)
      id
      html
      frontmatter {
        title
      }
    }
  }
`;
