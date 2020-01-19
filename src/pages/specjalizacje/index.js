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
          <h1 className="has-text-weight-bold is-size-1 hero-image-heading">
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
