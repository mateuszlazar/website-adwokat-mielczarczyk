import React from "react";
import Layout from "../components/Layout";

const NotFoundPage = () => (
  <Layout>
    <section>
      <div className="container">
        <h1 className={"is-size-2"}>404</h1>
        <p>Ooops. Strona nie istnieje.</p>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
