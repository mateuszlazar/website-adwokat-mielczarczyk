import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import SpecializationList from "../components/SpecializationList";
import BlogRoll from "../components/BlogRoll";

export const IndexPageTemplate = ({ image, heading, description }) => (
  <div>
    <div
      className="full-width-image--home"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`
      }}
    ></div>
    {(heading || description) && (
      <section className="section section--gradient">
        <div className="container">
          {heading && <h1 className="title">{heading}</h1>}
          {description && (
            <h3 className="subtitle" m style={{ marginBottom: 0 }}>
              {description}
            </h3>
          )}
        </div>
      </section>
    )}
    <section
      className="section"
      style={{
        backgroundColor: "#f9f9f9",
        paddingTop: heading || description ? "3rem" : "5rem"
      }}
    >
      <div className="container content">
        <h3 className="has-text-weight-semibold is-size-3">SPECJALIZACJE</h3>
        <SpecializationList />
      </div>
    </section>
    <section className="section" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="container content">
        <h3 className="has-text-weight-semibold is-size-3">
          NAJNOWSZE ARTYKUŁY
        </h3>
        <BlogRoll limit={2} />
        <div className="column is-12 has-text-centered">
          <Link className="btn" to="/blog">
            PRZEJDŹ DO BLOGA
          </Link>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  description: PropTypes.string
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout showBrand={false}>
      <IndexPageTemplate
        image={frontmatter.image}
        heading={frontmatter.heading}
        description={frontmatter.description}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        heading
        description
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
