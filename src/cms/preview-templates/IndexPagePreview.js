import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const IndexPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <>
        <Navbar />
        <IndexPageTemplate
          image={data.image}
          heading={data.heading}
          description={data.description}
        />
        <Footer />
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default IndexPagePreview;
