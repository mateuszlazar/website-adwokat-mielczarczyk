import React, { useState } from "react";
import PropTypes from "prop-types";
import Iframe from "react-iframe";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const ContactPageTemplate = ({
  title,
  content,
  contentComponent,
  phone,
  mail,
  address
}) => {
  const [activeMaps, setMapAcivity] = useState([]);
  const PageContent = contentComponent || Content;
  const formattedPhone = phone.replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, " ");

  const toggleMap = index => () => {
    setMapAcivity(
      activeMaps.includes(index)
        ? activeMaps.filter(el => el !== index)
        : [...activeMaps, index]
    );
  };

  return (
    <section>
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title page-title is-size-4 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <a href={`tel:${phone}`} className={"is-size-4"}>
                tel. {formattedPhone}
              </a>
              <br />
              <a href={`mailto:${mail}`} className={"is-size-4"}>
                {mail}
              </a>
            </div>

            <div className="section" style={{ paddingTop: 0 }}>
              <div className={"content"}>
                <h4>ADRES</h4>
              </div>
              {address.map((a, i) => (
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "2em 0"
                    }}
                  >
                    <h4 style={{ fontWeight: 400 }}>
                      {i + 1}. {a.addressName}
                    </h4>
                    <a
                      className="btn btn--small"
                      onClick={toggleMap(i)}
                      style={{ marginLeft: "12px" }}
                    >
                      POKAŻ MAPĘ
                    </a>
                  </div>
                  {a.mapSrc && activeMaps.includes(i) && (
                    <Iframe
                      src={a.mapSrc}
                      width="100%"
                      height="350px"
                      frameBorder="0"
                    />
                  )}
                </>
              ))}
            </div>

            <div className="section" style={{ paddingTop: 0 }}>
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
  address: PropTypes.any,
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
        address={post.frontmatter.address}
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
        address {
          addressName
          mapSrc
        }
      }
    }
  }
`;
