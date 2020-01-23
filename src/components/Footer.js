import React from "react";
import Iframe from "react-iframe";
import { Link, graphql, StaticQuery } from "gatsby";
import facebookIcon from "../img/facebook.png";

const Footer = class extends React.Component {
  render() {
    const {
      title,
      phone,
      mail,
      facebook,
      address
    } = this.props.data.markdownRemark.frontmatter;
    const [mainAddress] = address;
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
              <h4
                className={"is-size-6"}
                style={{
                  fontWeight: 400,
                  color: "white",
                  lineHeight: "1.5rem"
                }}
              >
                {mainAddress.addressName.split(",").map(s => (
                  <>
                    {s}
                    <br />
                  </>
                ))}
              </h4>
              <a href={`tel:${phone}`} className={"is-size-6"}>
                tel. {formattedPhone}
              </a>
              <br />
              <a href={`mailto:${mail}`} className={"is-size-6"}>
                {mail}
              </a>
              <br />
              <br />
              <br />
              <a href={facebook} target={"_blank"} className={"is-size-6"}>
                <img src={facebookIcon} alt={"fb-icon"} />
              </a>
            </div>
            <div className="column is-8">
              <Iframe
                src={mainAddress.mapSrc}
                width="100%"
                height="350px"
                frameBorder="0"
              />
            </div>
            {/* <div className="column is-4 footer-meta">
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
            </div> */}
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
            address {
              addressName
              mapSrc
            }
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
