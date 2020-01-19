import React from "react";
import Iframe from "react-iframe";
import { Link, graphql, StaticQuery } from "gatsby";

const Footer = class extends React.Component {
  render() {
    const {
      title,
      phone,
      mail,
      facebook
    } = this.props.data.markdownRemark.frontmatter;
    const { edges: specializations } = this.props.data.allMarkdownRemark;
    const formattedPhone = phone.replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, " ");

    return (
      <footer
        className="section"
        style={{
          backgroundColor: "#000",
          paddingBottom: "1em"
        }}
      >
        <div className="container content">
          <div className="columns footer-contact">
            <div className="column is-4">
              <h3
                className="is-size-5"
                style={{ color: "white", textTransform: "uppercase" }}
              >
                {title}
              </h3>
              <br />
              <h4 style={{ color: "white" }}>
                Kancelaria Adwokacka
                <br />
                Adwokat Klaudia Mielczarczyk
              </h4>
              <a href={`tel:${phone}`} className={"is-size-6"}>
                tel. {formattedPhone}
              </a>
              <br />
              <a href={`mailto:${mail}`} className={"is-size-6"}>
                {mail}
              </a>
            </div>
            <div className="column is-4">
              <Iframe
                src={facebook}
                width="100%"
                maxWidth="340"
                height="300"
                style="border:none;overflow:hidden"
                scrolling="no"
                frameBorder="0"
                allowTransparency="true"
                allow="encrypted-media"
              />
            </div>
            <div className="column is-4 footer-meta">
              <h3
                className="is-size-5"
                style={{ color: "white", textTransform: "uppercase" }}
              >
                Porady prawne
              </h3>
              <ul>
                {specializations.map(({ node: post }) => (
                  <li>
                    <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                  </li>
                ))}
              </ul>
              <h3
                className="is-size-5"
                style={{ color: "white", textTransform: "uppercase" }}
              >
                Porady prawne online
              </h3>
            </div>
          </div>
          <div
            className={"column is-12 has-text-centered"}
            style={{
              fontSize: "14px",
              marginTop: "3em"
            }}
          >
            Adwokat Klaudia Mielczarczyk © 2020
          </div>
        </div>
      </footer>
    );
  }
};

export default () => (
  <StaticQuery
    query={graphql`
      query ContactPageData {
        markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
          frontmatter {
            title
            phone
            mail
            facebook
          }
        }
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___order] }
          filter: {
            frontmatter: { templateKey: { eq: "specialization-page" } }
          }
        ) {
          edges {
            node {
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
    render={(data, count) => <Footer data={data} count={count} />}
  />
);
