import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const SpecializationPageTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
  specializations
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section section--blog-post">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-4 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <PostContent content={content} />
            <div className={"specialization-nav columns is-multiline"}>
              {specializations.map(s => (
                <div className={"column is-4"}>
                  <Link to={s.fields.slug} className={"box"}>
                    <p>{s.frontmatter.title}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
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
  const { allMarkdownRemark, markdownRemark: post } = data;
  const specializations = getRestOfSpecializations(
    allMarkdownRemark.edges,
    post.id
  );

  return (
    <Layout>
      <SpecializationPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.excerpt}`} />
          </Helmet>
        }
        title={post.frontmatter.title}
        specializations={specializations}
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
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "specialization-page" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
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

const getRestOfSpecializations = (articles, id) =>
  articles.filter(a => a.node.id !== id).map(a => a.node);
