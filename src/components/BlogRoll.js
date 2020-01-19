import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-6" key={post.id}>
              <Link to={post.fields.slug}>
                <article
                  className={`blog-list-item tile is-child box blog-roll-notification`}
                >
                  <header>
                    <div className={"blog-roll-intro"}>
                      <p className="is-size-5">{post.frontmatter.title}</p>
                      <span>{post.frontmatter.date}</span>
                    </div>
                  </header>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <p className="button">Czytaj dalej</p>
                  </p>
                </article>
              </Link>
            </div>
          ))}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
                date(formatString: "DD MMMM YYYY", locale: "pl")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
