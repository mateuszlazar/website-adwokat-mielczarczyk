import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const ContactPageTemplate = ({
  title,
  content,
  contentComponent,
  phone,
  mail
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section>
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title page-title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <div className="columns content has-text-centered">
                <div className="column is-6">
                  <p>{phone}</p>
                </div>
                <div className="column is-6">
                  <p>{mail}</p>
                </div>
              </div>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout pageTitle="Kontakt">
      <ContactPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        phone={post.frontmatter.phone}
        mail={post.frontmatter.mail}
        content={post.html}
      />
    </Layout>
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ContactPage;

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        phone
        mail
      }
    }
  }
`;
