import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";

class SpecializationList extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: specializations } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {specializations &&
          specializations.map(({ node: post }) => (
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

export default () => (
  <StaticQuery
    query={graphql`
      query SpecializationListQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
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
                templateKey
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <SpecializationList data={data} count={count} />}
  />
);
