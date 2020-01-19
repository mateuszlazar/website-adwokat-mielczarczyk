import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";

class SpecializationList extends React.Component {
  render() {
    const { data, omitId } = this.props;
    let { edges: specializations } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {specializations &&
          specializations
            .filter(({ node: post }) => post.id !== omitId)
            .map(({ node: post }) => (
              <div className="is-parent column is-4" key={post.id}>
                <Link to={post.fields.slug}>
                  <article
                    className={`blog-list-item is-child box specialization-list-box`}
                  >
                    <h2 className="is-size-4">{post.frontmatter.title}</h2>
                  </article>
                </Link>
              </div>
            ))}
      </div>
    );
  }
}

SpecializationList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default ({ omitId = null }) => (
  <StaticQuery
    query={graphql`
      query SpecializationListQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___order] }
          filter: {
            frontmatter: { templateKey: { eq: "specialization-page" } }
          }
        ) {
          edges {
            node {
              excerpt(pruneLength: 200)
              id
              fields {
                slug
              }
              frontmatter {
                title
                order
                templateKey
              }
            }
          }
        }
      }
    `}
    render={(data, count) => (
      <SpecializationList data={data} count={count} omitId={omitId} />
    )}
  />
);
