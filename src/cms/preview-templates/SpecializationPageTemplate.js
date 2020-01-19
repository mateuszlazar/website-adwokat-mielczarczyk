import React from "react";
import PropTypes from "prop-types";
import { SpecializationPageTemplate } from "../../templates/specialization-page";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";

const SpecializationPagePreview = ({ entry, widgetFor }) => {
  return (
    <>
      <Navbar />
      <Hero />
      <SpecializationPageTemplate
        content={widgetFor("body")}
        title={entry.getIn(["data", "title"])}
        order={1}
      />
      <Footer />
    </>
  );
};

SpecializationPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default SpecializationPagePreview;
