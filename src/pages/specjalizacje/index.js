import React from "react";

import Layout from "../../components/Layout";
import SpecializationList from "../../components/SpecializationList";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout pageTitle={"Specjalizacje"}>
        <div
          className="full-width-image-container full-width-image-container--slim margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpeg')`
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
              backgroundColor: "#f40",
              color: "white",
              padding: "1rem"
            }}
          >
            SPECJALIZACJE
          </h1>
        </div>
        <section className="section" style={{ backgroundColor: "#f9f9f9" }}>
          <div className="container">
            <div className="content">
              <SpecializationList />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
