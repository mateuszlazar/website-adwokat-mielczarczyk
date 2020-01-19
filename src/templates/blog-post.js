import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  date,
  helmet,
  prev,
  next
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section section--blog-post">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <span>Klaudia Mielczarczyk &bull; {date}</span>
            <h1 className="title is-size-4 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
            {/* TAGS HIDDEN WITH FALSE */}
            {false && tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div className={"blog-post-nav columns"}>
              {prev ? (
                <div className={"column is-6"}>
                  <Link to={prev.fields.slug} className={"box"}>
                    <span>Poprzedni artykuł</span>
                    <p>{prev.frontmatter.title}</p>
                  </Link>
                </div>
              ) : (
                <div />
              )}
              {next && (
                <div className={"column is-6"}>
                  <Link to={next.fields.slug} className={"box"}>
                    <span>Następny artykuł</span>
                    <p>{next.frontmatter.title}</p>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  date: PropTypes.string
};

const BlogPost = ({ data }) => {
  const { allMarkdownRemark, markdownRemark: post } = data;
  const [next, prev] = getPrevAndNextArticles(allMarkdownRemark.edges, post.id);

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        date={post.frontmatter.date}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        prev={prev}
        next={next}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
      id
      html
      frontmatter {
        date(formatString: "DD MMMM YYYY", locale: "pl")
        title
        description
        tags
      }
    }
  }
`;

function getPrevAndNextArticles(articles, id) {
  const articlesArray = articles.map(a => a.node);
  const currentArticleIndex = articlesArray.findIndex(a => a.id === id);

  let prevArticle = null;
  let nextArticle = null;
  if (currentArticleIndex < articlesArray.length - 1) {
    prevArticle = articlesArray[currentArticleIndex + 1];
  }
  if (currentArticleIndex > 0) {
    nextArticle = articlesArray[currentArticleIndex - 1];
  }
  return [prevArticle, nextArticle];
}
